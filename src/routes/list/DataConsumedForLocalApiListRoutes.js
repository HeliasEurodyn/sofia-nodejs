const express = require('express');
const router = express.Router();
const DataConsumedForLocalApiListController = require('../../controllers/list/DataConsumedForLocalApiListController');

router.post('/', DataConsumedForLocalApiListController.getList);
router.get('/category_grouping/', DataConsumedForLocalApiListController.getCategoryGroupingList);
router.get('/Service_grouping/', DataConsumedForLocalApiListController.getServiceGroupingList);
router.get('/business_object_grouping/', DataConsumedForLocalApiListController.getBusinessObjectGroupingList);

module.exports  = router;