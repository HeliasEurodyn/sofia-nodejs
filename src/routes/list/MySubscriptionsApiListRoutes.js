const express = require('express');
const router = express.Router();
const MySubscriptionsApiListController = require('../../controllers/list/MySubscriptionsApiListController');

router.post('/', MySubscriptionsApiListController.getList);
router.get('/category_grouping/', MySubscriptionsApiListController.getCategoryGroupingList);
router.get('/service_grouping/', MySubscriptionsApiListController.getServiceGroupingList);
router.get('/business_object_grouping/', MySubscriptionsApiListController.getBusinessObjectGroupingList);
router.get('/users_grouping/', MySubscriptionsApiListController.getUsersGroupingList);

module.exports  = router;