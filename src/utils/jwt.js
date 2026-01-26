const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

const ACCESS_TTL = process.env.ACCESS_TOKEN_TTL || '15m';
const REFRESH_TTL = process.env.REFRESH_TOKEN_TTL || '30d';

if (!ACCESS_SECRET || !REFRESH_SECRET) {
  throw new Error('JWT secrets are not defined in environment variables');
}

const signAccessToken = (payload) => jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_TTL });
const signRefreshToken = (payload) => jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_TTL });

const verifyAccessToken = (token) => jwt.verify(token, ACCESS_SECRET);
const verifyRefreshToken = (token) => jwt.verify(token, REFRESH_SECRET);

// utils/jwt.js

const getUserIdFromAccessToken = (token) => {
  // Anonymous user
  if (!token) {
    return '';
  }

  let payload;
  try {
    payload = verifyAccessToken(token);
  } catch (e) {
    throw new Error('ACCESS_TOKEN_INVALID');
  }

  if (!payload?.sub) {
    throw new Error('ACCESS_TOKEN_INVALID');
  }

  return payload.sub;
};

module.exports = {
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  getUserIdFromAccessToken
};
