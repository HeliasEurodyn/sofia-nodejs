const express = require('express');
const router = express.Router();
const MyOfferedServicesListController = require('../../controllers/list/MyOfferedServicesListController');

router.get('/', MyOfferedServicesListController.getList);
router.get('/sqlgf_1/', MyOfferedServicesListController.getSqlgf1List);
router.get('/sqlgf_2/', MyOfferedServicesListController.getSqlgf2List);
router.get('/sqlgf_3/', MyOfferedServicesListController.getSqlgf3List);
router.get('/sqlgf_4/', MyOfferedServicesListController.getSqlgf4List);

module.exports  = router;