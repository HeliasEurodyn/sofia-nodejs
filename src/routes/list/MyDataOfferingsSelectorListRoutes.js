const express = require('express');
const router = express.Router();
const MyDataOfferingsSelectorListController = require('../../controllers/list/MyDataOfferingsSelectorListController');

router.get('/', MyDataOfferingsSelectorListController.getList);
router.get('/sqlgf_1/', MyDataOfferingsSelectorListController.getSqlgf1List);
router.get('/sqlgf_2/', MyDataOfferingsSelectorListController.getSqlgf2List);
router.get('/sqlgf_3/', MyDataOfferingsSelectorListController.getSqlgf3List);
router.get('/sqlgf_4/', MyDataOfferingsSelectorListController.getSqlgf4List);

module.exports  = router;