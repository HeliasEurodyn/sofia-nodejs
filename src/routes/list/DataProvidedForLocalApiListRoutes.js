const express = require('express');
const router = express.Router();
const DataProvidedForLocalApiListController = require('../../controllers/list/DataProvidedForLocalApiListController');

router.post('/', DataProvidedForLocalApiListController.getList);
router.get('/category_grouping/', DataProvidedForLocalApiListController.getCategoryGroupingList);
router.get('/service_grouping/', DataProvidedForLocalApiListController.getServiceGroupingList);
router.get('/business_object_grouping/', DataProvidedForLocalApiListController.getBusinessObjectGroupingList);

module.exports  = router;