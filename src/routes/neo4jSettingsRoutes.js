const express = require('express');
const controller = require('../controllers/neo4jSettingsController');

const router = express.Router();

/**
 * Feature-level middleware can go here
 * e.g. authentication, logging, caching, rate limit
 */
// router.use(authMiddleware);

router.get('/script.js', controller.getJavaScript);
router.get('/min/script.js', controller.getMinifiedJavaScript);
router.get('/themes', controller.getThemes);

module.exports = router;
