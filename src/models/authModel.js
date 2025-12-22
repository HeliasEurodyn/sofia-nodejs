const pool = require('../db');
const { sha256 } = require('../utils/crypto');

const findUserByUsername = async (username) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT id, username, password, enabled
       FROM user
       WHERE username = :username
       LIMIT 1`,
      { username }
    );
    return rows[0] || null;
  } finally {
    conn.release();
  }
};

// -------- Sessions --------

const createSession = async ({ sessionId, userId, expiresOn, userAgent, ipAddress }) => {
  const conn = await pool.getConnection();
  try {
    await conn.query(
      `INSERT INTO session (id, user_id, created_on, expires_on, user_agent, ip_address)
       VALUES (:sessionId, :userId, NOW(), :expiresOn, :userAgent, :ipAddress)`,
      { sessionId, userId, expiresOn, userAgent, ipAddress }
    );
  } finally {
    conn.release();
  }
};

const getSessionById = async (sessionId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT id, user_id, expires_on, revoked_on
       FROM session
       WHERE id = :sessionId
       LIMIT 1`,
      { sessionId }
    );
    return rows[0] || null;
  } finally {
    conn.release();
  }
};

const revokeSession = async (sessionId) => {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    await conn.query(
      `UPDATE session SET revoked_on = NOW()
       WHERE id = :sessionId AND revoked_on IS NULL`,
      { sessionId }
    );

    // revoke all refresh tokens for this session
    await conn.query(
      `UPDATE refresh_token SET revoked_on = NOW()
       WHERE session_id = :sessionId AND revoked_on IS NULL`,
      { sessionId }
    );

    await conn.commit();
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    conn.release();
  }
};

const revokeAllSessionsForUser = async (userId) => {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    await conn.query(
      `UPDATE session SET revoked_on = NOW()
       WHERE user_id = :userId AND revoked_on IS NULL`,
      { userId }
    );

    await conn.query(
      `UPDATE refresh_token SET revoked_on = NOW()
       WHERE user_id = :userId AND revoked_on IS NULL`,
      { userId }
    );

    await conn.commit();
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    conn.release();
  }
};

// -------- Refresh tokens (bound to session) --------

const saveRefreshToken = async ({ sessionId, userId, refreshToken, expiresOn, userAgent, ipAddress }) => {
  const conn = await pool.getConnection();
  try {
    const tokenHash = sha256(refreshToken);
    await conn.query(
      `INSERT INTO refresh_token
       (session_id, user_id, token_hash, created_on, expires_on, user_agent, ip_address)
       VALUES (:sessionId, :userId, :tokenHash, NOW(), :expiresOn, :userAgent, :ipAddress)`,
      { sessionId, userId, tokenHash, expiresOn, userAgent, ipAddress }
    );
    return tokenHash;
  } finally {
    conn.release();
  }
};

const findRefreshTokenRow = async (refreshToken) => {
  const conn = await pool.getConnection();
  try {
    const tokenHash = sha256(refreshToken);
    const [rows] = await conn.query(
      `SELECT id, session_id, user_id, token_hash, expires_on, revoked_on, replaced_by_hash
       FROM refresh_token
       WHERE token_hash = :tokenHash
       LIMIT 1`,
      { tokenHash }
    );
    return rows[0] || null;
  } finally {
    conn.release();
  }
};

const rotateRefreshToken = async (oldRefreshToken, newRefreshToken) => {
  const conn = await pool.getConnection();
  try {
    const oldHash = sha256(oldRefreshToken);
    const newHash = sha256(newRefreshToken);

    await conn.query(
      `UPDATE refresh_token
       SET revoked_on = NOW(), replaced_by_hash = :newHash
       WHERE token_hash = :oldHash AND revoked_on IS NULL`,
      { oldHash, newHash }
    );

    return newHash;
  } finally {
    conn.release();
  }
};

module.exports = {
  findUserByUsername,

  createSession,
  getSessionById,
  revokeSession,
  revokeAllSessionsForUser,

  saveRefreshToken,
  findRefreshTokenRow,
  rotateRefreshToken
};
