import arcjet, {
  botCategories,
  type categories,
  detectBot,
  detectPromptInjection,
  filter,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
  tokenBucket,
  validateEmail,
} from '@arcjet/next';

// Re-export the rules to simplify imports inside handlers
export {
  botCategories,
  detectBot,
  detectPromptInjection,
  filter,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
  tokenBucket,
  validateEmail,
  type categories,
};

// Get your Arcjet key at <https://app.arcjet.com>.
// Set it as an environment variable instead of hard coding it.
const arcjetKey = process.env.ARCJET_KEY;

if (!arcjetKey) {
  throw new Error('Cannot find `ARCJET_KEY` environment variable');
}

const isDev = process.env.NODE_ENV === 'development';

// Create a base Arcjet instance for use by each handler
export default arcjet({
  // Get your site key from https://app.arcjet.com
  // and set it as an environment variable rather than hard coding.
  // See: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
  key: arcjetKey,
  rules: [
    // Shield protects against common web attacks e.g. SQL injection
    shield({ mode: isDev ? 'DRY_RUN' : 'LIVE' }),
  ],
  characteristics: ['userId'],
});
