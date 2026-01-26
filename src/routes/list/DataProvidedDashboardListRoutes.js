const express = require('express');
const router = express.Router();
const DataProvidedDashboardListController = require('../../controllers/list/DataProvidedDashboardListController');

router.post('/', DataProvidedDashboardListController.getList);
router.get('/sqlgf_1/', DataProvidedDashboardListController.getSqlgf1List);
router.get('/sqlgf_2/', DataProvidedDashboardListController.getSqlgf2List);
router.get('/sqlgf_3/', DataProvidedDashboardListController.getSqlgf3List);

module.exports  = router;