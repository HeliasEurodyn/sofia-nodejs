const express = require('express');
const router = express.Router();
const ConsumeDataListController = require('../../controllers/list/ConsumeDataListController');

router.get('/', ConsumeDataListController.getList);
router.get('/sqlgf_1/', ConsumeDataListController.getSqlgf1List);
router.get('/sqlgf_2/', ConsumeDataListController.getSqlgf2List);
router.get('/sqlgf_3/', ConsumeDataListController.getSqlgf3List);

module.exports  = router;