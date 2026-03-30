const express = require('express');
const cveController = require('../controllers/cveController');

const router = express.Router();

router.get('/by-cpe', cveController.getCvesByCpe);

router.get('/by-id', cveController.getCveById);

router.post('/resolve-cpe', cveController.resolveCpe);

module.exports = router;