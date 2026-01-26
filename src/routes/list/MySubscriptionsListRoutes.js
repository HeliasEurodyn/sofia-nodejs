const express = require('express');
const router = express.Router();
const MySubscriptionsListController = require('../../controllers/list/MySubscriptionsListController');

router.post('/', MySubscriptionsListController.getList);
router.get('/category_grouping/', MySubscriptionsListController.getCategoryGroupingList);
router.get('/service_grouping/', MySubscriptionsListController.getServiceGroupingList);
router.get('/business_object_grouping/', MySubscriptionsListController.getBusinessObjectGroupingList);
router.get('/users_grouping/', MySubscriptionsListController.getUsersGroupingList);

module.exports  = router;