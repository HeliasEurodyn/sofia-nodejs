const bcrypt = require('bcrypt');
const authModel = require('../models/authModel');
const { randomId } = require('../utils/crypto');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../utils/jwt');

const sessionTtlDays = Number(process.env.SESSION_TTL_DAYS || 30);

const addDays = (days) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d;
};

const login = async ({ username, password, userAgent, ipAddress }) => {
  const user = await authModel.findUserByUsername(username);
  if (!user) throw new Error('INVALID_CREDENTIALS');
  if (user.enabled === 0) throw new Error('USER_DISABLED');

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error('INVALID_CREDENTIALS');

  const sessionId = randomId(32); // 64-char hex
  const sessionExpiresOn = addDays(sessionTtlDays);

  await authModel.createSession({
    sessionId,
    userId: user.id,
    expiresOn: sessionExpiresOn,
    userAgent,
    ipAddress
  });

  const accessToken = signAccessToken({ sub: user.id, username: user.username, sid: sessionId });
  const refreshToken = signRefreshToken({ sub: user.id, sid: sessionId });

  await authModel.saveRefreshToken({
    sessionId,
    userId: user.id,
    refreshToken,
    expiresOn: sessionExpiresOn,
    userAgent,
    ipAddress
  });

  return { accessToken, refreshToken, sessionId, sessionExpiresOn };
};

const refresh = async ({ sessionId, refreshToken, userAgent, ipAddress }) => {
  if (!sessionId) throw new Error('SESSION_MISSING');

  // 1) session must exist + not revoked + not expired
  const session = await authModel.getSessionById(sessionId);
  if (!session) throw new Error('SESSION_INVALID');
  if (session.revoked_on) throw new Error('SESSION_INVALID');

  const sExp = new Date(session.expires_on);
  if (Number.isNaN(sExp.getTime()) || sExp.getTime() < Date.now()) throw new Error('SESSION_INVALID');

  // 2) verify refresh signature/exp
  const payload = verifyRefreshToken(refreshToken);

  // 3) payload.sid must match cookie sid
  if (payload.sid !== sessionId) throw new Error('SESSION_INVALID');

  // 4) check DB refresh row
  const row = await authModel.findRefreshTokenRow(refreshToken);
  if (!row) throw new Error('REFRESH_INVALID');
  if (row.revoked_on) throw new Error('REFRESH_REVOKED');

  const rExp = new Date(row.expires_on);
  if (Number.isNaN(rExp.getTime()) || rExp.getTime() < Date.now()) throw new Error('REFRESH_EXPIRED');

  // 5) rotation (new refresh saved, old revoked)
  const userId = row.user_id;

  const newAccessToken = signAccessToken({ sub: userId, sid: sessionId });
  const newRefreshToken = signRefreshToken({ sub: userId, sid: sessionId });

  await authModel.saveRefreshToken({
    sessionId,
    userId,
    refreshToken: newRefreshToken,
    expiresOn: sExp,
    userAgent,
    ipAddress
  });

  await authModel.rotateRefreshToken(refreshToken, newRefreshToken);

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};

const logout = async ({ sessionId }) => {
  if (!sessionId) return;
  await authModel.revokeSession(sessionId);
};

const logoutAll = async ({ userId }) => {
  await authModel.revokeAllSessionsForUser(userId);
};

module.exports = { login, refresh, logout, logoutAll };
