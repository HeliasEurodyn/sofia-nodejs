const express = require('express');
const router = express.Router();
const DataOfferingsSysadminListController = require('../../controllers/list/DataOfferingsSysadminListController');

router.get('/', DataOfferingsSysadminListController.getList);
router.get('/sqlgf_1/', DataOfferingsSysadminListController.getSqlgf1List);
router.get('/sqlgf_2/', DataOfferingsSysadminListController.getSqlgf2List);
router.get('/sqlgf_3/', DataOfferingsSysadminListController.getSqlgf3List);
router.get('/sqlgf_4/', DataOfferingsSysadminListController.getSqlgf4List);

module.exports  = router;