const express = require('express');
const router = express.Router();
const AvailableServicesSelectorListController = require('../../controllers/list/AvailableServicesSelectorListController');

router.get('/', AvailableServicesSelectorListController.getList);
router.get('/sqlgf_1/', AvailableServicesSelectorListController.getSqlgf1List);
router.get('/sqlgf_2/', AvailableServicesSelectorListController.getSqlgf2List);
router.get('/sqlgf_3/', AvailableServicesSelectorListController.getSqlgf3List);
router.get('/sqlgf_4/', AvailableServicesSelectorListController.getSqlgf4List);

module.exports  = router;