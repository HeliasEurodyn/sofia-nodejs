const express = require('express');
const controller = require('../controllers/authController');
const { authenticate } = require('../middleware/authenticate');
const authService = require('../services/authService');

const router = express.Router();

router.post('/login', controller.login);
router.post('/refresh', controller.refresh);
router.post('/logout', controller.logout);

// logout all devices (requires access token)
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
