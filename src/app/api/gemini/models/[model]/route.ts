import geminiConfig from '@/configs/gemini-config';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const GEMINI_API_BASE_URL = geminiConfig.baseUrl;

type RouteContextType = {
  params: Promise<{ model: string }>;
};

type GeminiPayload = {
  model: string;
  contents: unknown[];
};

const validateGeminiPayload = async (
  req: Request,
  model: string,
): Promise<GeminiPayload> => {
  if (!geminiConfig.apiKey) {
    throw { status: 403, message: 'Gemini API key not configured.' };
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    throw { status: 400, message: 'Invalid JSON body.' };
  }

  const contents = (body as { contents?: unknown }).contents;
  if (!Array.isArray(contents)) {
    throw { status: 400, message: 'contents array is required.' };
  }

  return { model, contents };
};

const streamGemini = async (
  payload: GeminiPayload,
): Promise<ReadableStream> => {
  const { model, contents } = payload;

  if (!geminiConfig.apiKey) {
    throw new Error('Gemini API key is not configured.');
  }

  const url =
    GEMINI_API_BASE_URL +
    '/models/' +
    encodeURIComponent(model) +
    ':streamGenerateContent' +
    '?alt=sse&key=' +
    geminiConfig.apiKey;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents }),
  });

  if (!response.ok || !response.body) {
    const errorText = await response.text();
    throw {
      status: response.status,
      message: 'Gemini API error ' + response.status + ': ' + errorText,
    };
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  const encoder = new TextEncoder();
  const transform = new TransformStream<Uint8Array, Uint8Array>();
  const writer = transform.writable.getWriter();

  void (async () => {
    let buffer = '';

    try {
      while (true) {
        const chunk = await reader.read();
        if (chunk.done) break;

        buffer += decoder.decode(chunk.value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('data: ')) {
            await writer.write(encoder.encode(trimmedLine + '\n\n'));
          }
        }
      }

      const tail = buffer.trim();
      if (tail.startsWith('data: ')) {
        await writer.write(encoder.encode(tail + '\n\n'));
      }
    } finally {
      await writer.close();
      reader.releaseLock();
    }
  })();

  return transform.readable;
};

const batchGemini = async (payload: GeminiPayload): Promise<unknown> => {
  const { model, contents } = payload;

  if (!geminiConfig.apiKey) {
    throw new Error('Gemini API key is not configured.');
  }

  const url =
    GEMINI_API_BASE_URL +
    '/models/' +
    encodeURIComponent(model) +
    ':generateContent?key=' +
    geminiConfig.apiKey;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw {
      status: response.status,
      message: 'Gemini API error ' + response.status + ': ' + errorText,
    };
  }

  return response.json();
};

const handleGeminiStream = async (
  req: Request,
  model: string,
): Promise<Response> => {
  const payload = await validateGeminiPayload(req, model);
  const stream = await streamGemini(payload);

  return new Response(stream, {
    status: 200,
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
};

const handleGeminiBatch = async (
  req: Request,
  model: string,
): Promise<NextResponse> => {
  const payload = await validateGeminiPayload(req, model);
  const data = await batchGemini(payload);
  return NextResponse.json(data);
};

const toErrorResponse = (err: unknown): NextResponse => {
  const status =
    typeof err === 'object' &&
    err !== null &&
    'status' in err &&
    typeof (err as { status: unknown }).status === 'number'
      ? (err as { status: number }).status
      : 500;

  const message =
    err instanceof Error
      ? err.message
      : typeof err === 'object' &&
          err !== null &&
          'message' in err &&
          typeof (err as { message: unknown }).message === 'string'
        ? (err as { message: string }).message
        : 'Internal server error';

  return NextResponse.json({ error: message }, { status });
};

import arcjet, {
  detectBot,
  detectPromptInjection,
  sensitiveInfo,
  tokenBucket,
} from '@/lib/arcjet';
import { findIp } from '@arcjet/ip';
import { convertToModelMessages, isTextUIPart, UIMessage } from 'ai';
// import { isSpoofedBot,isMissingUserAgent,isVerifiedBot } from "@arcjet/inspect";
const isDev = process.env.NODE_ENV === 'development';

const aj = arcjet
  .withRule(
    // Block all automated clients — bots inflate AI costs
    detectBot({
      mode: isDev ? 'DRY_RUN' : 'LIVE', // will block requests. Use "DRY_RUN" to log only
      // configured with a list of bots to allow from
      // https://arcjet.com/bot-list
      allow: [], // blocks all automated clients
    }),
  )
  .withRule(
    // Enforce budgets to control AI costs. Adjust rates and limits as needed.
    tokenBucket({
      mode: isDev ? 'DRY_RUN' : 'LIVE', // Blocks requests. Use "DRY_RUN" to log only
      refillRate: 100, // Refill 2,000 tokens per hour
      interval: '2h', // Refill every 2 hours
      capacity: 100, // Maximum 5,000 tokens in the bucket
    }),
  )
  .withRule(
    // Block messages containing sensitive information to prevent data leaks
    sensitiveInfo({
      mode: isDev ? 'DRY_RUN' : 'LIVE', // Blocks requests. Use "DRY_RUN" to log only
      // Block PII types that should never appear in AI prompts.
      // Remove types your app legitimately handles (e.g. EMAIL for a support bot).
      deny: ['CREDIT_CARD_NUMBER', 'EMAIL'],
    }),
  )
  .withRule(
    // Detect prompt injection attacks before they reach your AI model
    detectPromptInjection({
      mode: isDev ? 'DRY_RUN' : 'LIVE', // Blocks requests. Use "DRY_RUN" to log only
    }),
  );

type GeminiContent = {
  id: string;
  role: 'user' | 'system' | 'assistant';
  parts: Array<{ text?: string }>;
};
function geminiToUIMessages(contents: GeminiContent[]): UIMessage[] {
  return contents.map((c, i) => ({
    id: 'msg-' + i,
    // role: c.role === 'model' ? 'assistant' : 'user',
    role: c.role === 'assistant' ? 'assistant' : 'user',
    parts: c.parts
      .filter((p) => typeof p.text === 'string' && p.text.length > 0)
      .map((p) => ({ type: 'text', text: p.text! })),
  }));
}

async function checkArcjet(req: Request) {
  const publicIp = findIp(req) || '127.0.0.1';
  console.log('Public IP:', publicIp);

  const userId = publicIp;
  console.log('User ID:', userId);

  const payload: { contents: GeminiContent[] } = await req.json();

  const uiMessages = geminiToUIMessages(payload.contents);
  const modelMessages = await convertToModelMessages(uiMessages);
  // console.log(modelMessages);

  // Estimate token cost: ~1 token per 4 characters of text (rough heuristic).
  // For accurate counts use https://www.npmjs.com/package/tiktoken
  const totalChars = modelMessages.reduce((sum, m) => {
    const content =
      typeof m.content === 'string' ? m.content : JSON.stringify(m.content);
    return sum + content.length;
  }, 0);
  const estimate = Math.ceil(totalChars / 4);

  // Check the most recent user message for sensitive information and prompt injection.
  // Pass the full conversation if you want to scan all messages.
  const lastMessage: string = (uiMessages.at(-1)?.parts ?? [])
    .filter(isTextUIPart)
    .map((p) => p.text)
    .join(' ');

  return aj.protect(req, {
    userId,
    requested: estimate,
    sensitiveInfoValue: lastMessage,
    detectPromptInjectionMessage: lastMessage,
  });
}

export async function POST(req: NextRequest, ctx: RouteContextType) {
  try {
    const clonedRequest = req.clone();
    const decision = await checkArcjet(req);

    if (decision.isDenied()) {
      if (
        decision.ip.isHosting() ||
        decision.ip.isProxy() ||
        decision.ip.isRelay() ||
        decision.ip.isTor() ||
        decision.ip.isVpn()
      ) {
        return new Response('Forbidden', { status: 403 });
      }

      if (decision.ip.isAbuser()) {
        return new Response('Forbidden', { status: 403 });
      }

      if (decision.reason.isBot()) {
        return new Response('Automated clients are not permitted', {
          status: 403,
        });
      } else if (decision.reason.isRateLimit()) {
        return new Response('AI usage limit exceeded', { status: 429 });
      } else if (decision.reason.isSensitiveInfo()) {
        return new Response('Sensitive information detected', {
          status: 400,
        });
      } else if (decision.reason.isPromptInjection()) {
        return new Response(
          'Prompt injection detected — please rephrase your message',
          { status: 400 },
        );
      } else {
        return new Response('Forbidden', { status: 403 });
      }
    }

    const params = await ctx.params;
    const rawModel = params.model.trim();

    if (rawModel.endsWith(':generateContent')) {
      const model = rawModel.slice(0, -':generateContent'.length);
      return await handleGeminiBatch(clonedRequest, model);
    }

    if (rawModel.endsWith(':streamGenerateContent')) {
      const model = rawModel.slice(0, -':streamGenerateContent'.length);
      return await handleGeminiStream(clonedRequest, model);
    }

    return NextResponse.json(
      { error: 'Unsupported Gemini operation' },
      { status: 404 },
    );
  } catch (err) {
    console.error('Gemini route error:', err);
    return toErrorResponse(err);
  }
}
