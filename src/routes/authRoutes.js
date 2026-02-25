const express = require('express');
const controller = require('../controllers/authController');
const { authenticate } = require('../middleware/authenticate');
const authService = require('../services/authService');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication API
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', controller.login);

/**
 * @swagger
 * /api/auth/refresh:
 *   post:
 *     summary: Refresh access token
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Token refreshed
 *       401:
 *         description: Invalid refresh token
 */
router.post('/refresh', controller.refresh);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout current session
 *     tags: [Auth]
 *     responses:
 *       204:
 *         description: Logged out
 */
router.post('/logout', controller.logout);

/**
 * @swagger
 * /api/auth/logout-all:
 *   post:
 *     summary: Logout from all devices
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Logged out from all sessions
 */
router.post('/logout-all', authenticate, async (req, res, next) => {
  try {
    await authService.logoutAll({ userId: req.user.id });
    // εδώ ΔΕΝ καθαρίζουμε cookie σε άλλες συσκευές (προφανώς),
    // αλλά μπορούμε να καθαρίσουμε το τρέχον cookie:
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
