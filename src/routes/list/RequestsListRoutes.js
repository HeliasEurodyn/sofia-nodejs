const express = require('express');
const router = express.Router();
const RequestsListController = require('../../controllers/list/RequestsListController');

router.post('/', RequestsListController.getList);
router.get('/category_grouping/', RequestsListController.getCategoryGroupingList);
router.get('/service_grouping/', RequestsListController.getServiceGroupingList);
router.get('/business_object_grouping/', RequestsListController.getBusinessObjectGroupingList);
router.get('/users_grouping/', RequestsListController.getUsersGroupingList);

module.exports  = router;