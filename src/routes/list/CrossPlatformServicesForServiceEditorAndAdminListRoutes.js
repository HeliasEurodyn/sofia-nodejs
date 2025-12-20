const express = require('express');
const router = express.Router();
const CrossPlatformServicesForServiceEditorAndAdminListController = require('../../controllers/list/CrossPlatformServicesForServiceEditorAndAdminListController');

router.get('/', CrossPlatformServicesForServiceEditorAndAdminListController.getList);
router.get('/sqlgf_2/', CrossPlatformServicesForServiceEditorAndAdminListController.getSqlgf2List);
router.get('/sqlgf_3/', CrossPlatformServicesForServiceEditorAndAdminListController.getSqlgf3List);

module.exports  = router;