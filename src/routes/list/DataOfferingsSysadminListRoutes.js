const express = require('express');
const router = express.Router();
const DataOfferingsSysAdminListController = require('../../controllers/list/DataOfferingsSysAdminListController');

router.post('/', DataOfferingsSysAdminListController.getList);
router.get('/sqlgf_1/', DataOfferingsSysAdminListController.getSqlgf1List);
router.get('/sqlgf_2/', DataOfferingsSysAdminListController.getSqlgf2List);
router.get('/sqlgf_3/', DataOfferingsSysAdminListController.getSqlgf3List);
router.get('/sqlgf_4/', DataOfferingsSysAdminListController.getSqlgf4List);

module.exports  = router;