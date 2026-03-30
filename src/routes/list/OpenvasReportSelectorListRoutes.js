const express = require('express');
const router = express.Router();
const OpenvasReportSelectorListController = require('../../controllers/list/OpenvasReportSelectorListController');

router.post('/', OpenvasReportSelectorListController.getList);

module.exports  = router;