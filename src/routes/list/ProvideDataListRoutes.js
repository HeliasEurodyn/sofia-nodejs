const express = require('express');
const router = express.Router();
const ProvideDataListController = require('../../controllers/list/ProvideDataListController');

router.post('/', ProvideDataListController.getList);
router.get('/category_grouping/', ProvideDataListController.getCategoryGroupingList);
router.get('/service_grouping/', ProvideDataListController.getServiceGroupingList);
router.get('/business_object_grouping/', ProvideDataListController.getBusinessObjectGroupingList);

module.exports  = router;