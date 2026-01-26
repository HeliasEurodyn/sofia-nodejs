const authService = require('../services/authService');
const { getSessionCookieName, getSessionCookieOptions } = require('../utils/cookies');

const setSessionCookie = (res, sessionId, sessionExpiresOn) => {
  const name = getSessionCookieName();
  const opts = getSessionCookieOptions();
  res.cookie(name, sessionId, {
    ...opts,
    maxAge: Math.max(0, new Date(sessionExpiresOn).getTime() - Date.now())
  });
};

const clearSessionCookie = (res) => {
  const name = getSessionCookieName();
  const opts = getSessionCookieOptions();
  res.clearCookie(name, { ...opts });
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body || {};
    const userAgent = req.get('user-agent') || null;
    const ipAddress = req.ip;

    const { accessToken, refreshToken, sessionId, sessionExpiresOn, user } =
      await authService.login({ username, password, userAgent, ipAddress });

    setSessionCookie(res, sessionId, sessionExpiresOn);
    res.json({ accessToken, refreshToken, sessionExpiresOn, user });
  } catch (err) {
    next(err);
  }
};

const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body || {};
    const cookieName = getSessionCookieName();
    const sessionId = req.cookies?.[cookieName];

    const userAgent = req.get('user-agent') || null;
    const ipAddress = req.ip;

    const tokens = await authService.refresh({ sessionId, refreshToken, userAgent, ipAddress });
    res.json(tokens);
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    const cookieName = getSessionCookieName();
    const sessionId = req.cookies?.[cookieName];

    await authService.logout({ sessionId });
    clearSessionCookie(res);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { login, refresh, logout };
