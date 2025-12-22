const { verifyAccessToken } = require('../utils/jwt');
const { getSessionCookieName } = require('../utils/cookies');

const authenticate = (req, res, next) => {
  try {
    const header = req.get('authorization') || '';
    const [type, token] = header.split(' ');

    if (type !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }

    const payload = verifyAccessToken(token);

    // Optional αλλά "Google-like": το access token πρέπει να ανήκει στο ίδιο session cookie
    const cookieName = getSessionCookieName();
    const sidCookie = req.cookies?.[cookieName];
    if (!sidCookie || payload.sid !== sidCookie) {
      return res.status(401).json({ message: 'Session mismatch' });
    }

    req.user = { id: payload.sub, username: payload.username, sid: payload.sid };
    return next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid or expired access token' });
  }
};

module.exports = { authenticate };
