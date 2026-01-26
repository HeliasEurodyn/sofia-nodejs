const express = require('express');
const router = express.Router();
const BusinessObjectApiListController = require('../../controllers/list/BusinessObjectApiListController');

router.post('/', BusinessObjectApiListController.getList);
router.get('/category_grouping/', BusinessObjectApiListController.getCategoryGroupingList);
router.get('/service_grouping/', BusinessObjectApiListController.getServiceGroupingList);

module.exports  = router;