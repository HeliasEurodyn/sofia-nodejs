const cookieName = process.env.COOKIE_NAME || 'sid';

const isProd = process.env.NODE_ENV === 'production';
const secure = String(process.env.COOKIE_SECURE || (isProd ? 'true' : 'false')) === 'true';
const sameSite = process.env.COOKIE_SAMESITE || (isProd ? 'strict' : 'lax');

const getSessionCookieName = () => cookieName;

const getSessionCookieOptions = () => ({
  httpOnly: true,
  secure,
  sameSite,
  path: '/',
  // maxAge set per-login based on TTL
});

module.exports = { getSessionCookieName, getSessionCookieOptions };
