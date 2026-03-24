'use client';

import { useAudio } from '@/hooks/use-audio';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { useEffect, useMemo, useRef, useState } from 'react';

type TokenType =
  | 'command'
  | 'flag'
  | 'string'
  | 'number'
  | 'operator'
  | 'path'
  | 'variable'
  | 'comment'
  | 'default';

interface Token {
  type: TokenType;
  value: string;
}

function tokenizeBash(text: string): Token[] {
  const tokens: Token[] = [];
  const words = text.split(/(\s+)/);

  let isFirstWord = true;

  for (const word of words) {
    if (/^\s+$/.test(word)) {
      tokens.push({ type: 'default', value: word });
      continue;
    }

    if (word.startsWith('#')) {
      tokens.push({ type: 'comment', value: word });
      continue;
    }

    if (word.startsWith('$')) {
      tokens.push({ type: 'variable', value: word });
      isFirstWord = false;
      continue;
    }

    if (word.startsWith('--') || word.startsWith('-')) {
      tokens.push({ type: 'flag', value: word });
      isFirstWord = false;
      continue;
    }

    if (/^["'].*["']$/.test(word)) {
      tokens.push({ type: 'string', value: word });
      isFirstWord = false;
      continue;
    }

    if (/^\d+$/.test(word)) {
      tokens.push({ type: 'number', value: word });
      isFirstWord = false;
      continue;
    }

    if (/^[|>&<]+$/.test(word)) {
      tokens.push({ type: 'operator', value: word });
      isFirstWord = true;
      continue;
    }

    if (word.includes('/') || word.startsWith('.') || word.startsWith('~')) {
      tokens.push({ type: 'path', value: word });
      isFirstWord = false;
      continue;
    }

    if (isFirstWord) {
      tokens.push({ type: 'command', value: word });
      isFirstWord = false;
      continue;
    }

    tokens.push({ type: 'default', value: word });
  }

  return tokens;
}

const tokenColors: Record<TokenType, string> = {
  command: 'text-emerald-400',
  flag: 'text-sky-400',
  string: 'text-amber-300',
  number: 'text-purple-400',
  operator: 'text-red-400',
  path: 'text-cyan-300',
  variable: 'text-pink-400',
  comment: 'text-muted-foreground dark:text-foreground',
  default: 'text-muted-foreground dark:text-foreground',
};

function SyntaxHighlightedText({ text }: { text: string }) {
  const tokens = tokenizeBash(text);

  return (
    <>
      {tokens.map((token, i) => (
        <span key={i} className={tokenColors[token.type]}>
          {token.value}
        </span>
      ))}
    </>
  );
}

interface TerminalLine {
  type: 'command' | 'output';
  content: string;
}

export interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  username?: string;
  className?: string;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  initialDelay?: number;
  enableSound?: boolean;
}

export function Terminal({
  commands = ['npx shadcn@latest init'],
  outputs = {},
  username = "Abhijit's-Macbook",
  className,
  typingSpeed = 50,
  delayBetweenCommands = 800,
  initialDelay = 500,
  enableSound = true,
}: TerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);
  const { down, up, initializeAudioContext } = useAudio(inView && enableSound);

  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [commandIdx, setCommandIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [outputIdx, setOutputIdx] = useState(-1);
  const [phase, setPhase] = useState<
    'idle' | 'typing' | 'executing' | 'outputting' | 'pausing' | 'done'
  >('idle');
  const [cursorVisible, setCursorVisible] = useState(true);

  const currentCommand = commands[commandIdx] || '';
  const currentOutputs = useMemo(
    () => outputs[commandIdx] || [],
    [outputs, commandIdx],
  );
  const isLastCommand = commandIdx === commands.length - 1;

  useEffect(() => {
    if (!inView || phase !== 'idle') return;
    const t = setTimeout(() => setPhase('typing'), initialDelay);
    return () => clearTimeout(t);
  }, [inView, phase, initialDelay]);

  useEffect(() => {
    const handleUserGesture = () => {
      initializeAudioContext();
      window.removeEventListener('click', handleUserGesture);
      window.removeEventListener('keydown', handleUserGesture);
    };

    window.addEventListener('click', handleUserGesture);
    window.addEventListener('keydown', handleUserGesture);

    return () => {
      window.removeEventListener('click', handleUserGesture);
      window.removeEventListener('keydown', handleUserGesture);
    };
  }, [initializeAudioContext]);

  useEffect(() => {
    if (phase !== 'typing') return;

    if (charIdx < currentCommand.length) {
      const char = currentCommand[charIdx];
      down(char);
      const t = setTimeout(
        () => {
          up(char);
          setCurrentText(currentCommand.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        },
        typingSpeed + Math.random() * 30,
      );
      return () => clearTimeout(t);
    } else {
      down('Enter');
      const t = setTimeout(() => {
        up('Enter');
        setPhase('executing');
      }, 80);
      return () => clearTimeout(t);
    }
  }, [phase, charIdx, currentCommand, typingSpeed, down, up]);

  useEffect(() => {
    if (phase !== 'executing') return;

    // eslint-disable-next-line
    setLines((prev) => [...prev, { type: 'command', content: currentCommand }]);
    setCurrentText('');

    if (currentOutputs.length > 0) {
      setOutputIdx(0);
      setPhase('outputting');
    } else if (isLastCommand) {
      setPhase('done');
    } else {
      setPhase('pausing');
    }
  }, [phase, currentCommand, currentOutputs.length, isLastCommand]);

  useEffect(() => {
    if (phase !== 'outputting') return;

    if (outputIdx >= 0 && outputIdx < currentOutputs.length) {
      const t = setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { type: 'output', content: currentOutputs[outputIdx] },
        ]);
        setOutputIdx((i) => i + 1);
      }, 150);
      return () => clearTimeout(t);
    } else if (outputIdx >= currentOutputs.length) {
      const t = setTimeout(() => {
        if (isLastCommand) {
          setPhase('done');
        } else {
          setPhase('pausing');
        }
      }, 300);
      return () => clearTimeout(t);
    }
  }, [phase, outputIdx, currentOutputs, isLastCommand]);

  useEffect(() => {
    if (phase !== 'pausing') return;
    const t = setTimeout(() => {
      setCharIdx(0);
      setOutputIdx(-1);
      setCommandIdx((c) => c + 1);
      setPhase('typing');
    }, delayBetweenCommands);
    return () => clearTimeout(t);
  }, [phase, delayBetweenCommands]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines, phase]);

  const prompt = (
    <span className='text-muted-foreground dark:text-foreground'>
      <span className='text-sky-500'>{username}</span>
      <span className='text-emerald-600'>:</span>
      <span className='text-sky-400'>~</span>
      <span className='text-muted-foreground'>$</span>{' '}
    </span>
  );

  return (
    <div
      ref={containerRef}
      className={cn('w-full h-full px-0 font-mono text-xs', className)}>
      <div className='overflow-hidden rounded-t-lg border border-background bg-background h-full'>
        {/* Title Bar */}
        <div className='flex items-center gap-2 bg-background dark:bg-background px-4 py-3 border-b border-muted-foreground/50 dark:border-foreground'>
          <div className='flex items-center gap-1.5'>
            <div className='h-3 w-3 rounded-full bg-red-500 transition-colors hover:bg-red-600' />
            <div className='h-3 w-3 rounded-full bg-yellow-500 transition-colors hover:bg-yellow-600' />
            <div className='h-3 w-3 rounded-full bg-green-500 transition-colors hover:bg-green-600' />
          </div>
          <div className='flex-1 text-center'>
            <span className='truncate text-xs text-muted-foreground dark:text-foreground'>
              {username} — bash
            </span>
          </div>
          <div className='w-13' />
        </div>

        {/* Terminal Content */}
        <div
          ref={contentRef}
          className='no-visible-scrollbar h-80 overflow-y-auto p-4 font-mono'>
          {lines.map((line, i) => (
            <div key={i} className='leading-relaxed whitespace-pre-wrap'>
              {line.type === 'command' ? (
                <span>
                  {prompt}
                  <SyntaxHighlightedText text={line.content} />
                </span>
              ) : (
                <span className='text-muted-foreground'>{line.content}</span>
              )}
            </div>
          ))}

          {phase === 'typing' && (
            <div className='leading-relaxed whitespace-pre-wrap'>
              {prompt}
              <SyntaxHighlightedText text={currentText} />
              <span className='ml-0.5 inline-block h-4 w-2 bg-background align-middle' />
            </div>
          )}

          {(phase === 'done' ||
            phase === 'pausing' ||
            phase === 'outputting') && (
            <div className='leading-relaxed whitespace-pre-wrap'>
              {prompt}
              <span
                className={cn(
                  'inline-block h-4 w-2 bg-background align-middle transition-opacity duration-100',
                  !cursorVisible && 'opacity-0',
                )}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
