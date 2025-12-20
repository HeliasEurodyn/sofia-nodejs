const express = require('express');
const router = express.Router();
const DataConsumedDashboardListController = require('../../controllers/list/DataConsumedDashboardListController');

router.get('/', DataConsumedDashboardListController.getList);
router.get('/sqlgf_1/', DataConsumedDashboardListController.getSqlgf1List);
router.get('/sqlgf_2/', DataConsumedDashboardListController.getSqlgf2List);
router.get('/sqlgf_3/', DataConsumedDashboardListController.getSqlgf3List);

module.exports  = router;