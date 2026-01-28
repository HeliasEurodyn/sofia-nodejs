const express = require('express');
const router = express.Router();
const dataService = require('../services/dataService');

/**
 * Example endpoint:
 * POST /api/data/save
 * body: { "userId": "123", "payload": { ... } }
 */
router.post('/save', async (req, res, next) => {
  try {
    const saved = await dataService.saveAndNotify(req.body);
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
