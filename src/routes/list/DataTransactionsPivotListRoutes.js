const express = require('express');
const router = express.Router();
const DataTransactionsPivotListController = require('../../controllers/list/DataTransactionsPivotListController');

router.get('/', DataTransactionsPivotListController.getList);
router.get('/sqlgf_1/', DataTransactionsPivotListController.getSqlgf1List);
router.get('/sqlgf_2/', DataTransactionsPivotListController.getSqlgf2List);
router.get('/sqlgf_3/', DataTransactionsPivotListController.getSqlgf3List);
router.get('/gf_name/', DataTransactionsPivotListController.getGfNameList);
router.get('/gf_username/', DataTransactionsPivotListController.getGfUsernameList);

module.exports  = router;