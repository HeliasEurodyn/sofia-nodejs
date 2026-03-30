const express = require('express');
const router = express.Router();
const openvasController = require('../controllers/openvasController');
const openvasContext = require('../middleware/openvasContext');
const { authenticate } = require('../middleware/authenticate');
const neo4jContext = require('../middleware/neo4jContext');

router.use(authenticate);
router.use(neo4jContext);

router.get('/updates', openvasContext, openvasController.getUpdates)
router.get('/reports', openvasContext, openvasController.getReports);
router.get('/report/:reportId/results', openvasContext, openvasController.getResults);
router.get('/report/:reportId/applications', openvasContext, openvasController.getReportApplications);

module.exports = router;