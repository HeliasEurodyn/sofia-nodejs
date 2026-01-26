const express = require('express');
const router = express.Router();
const MyOfferedServicesApiListController = require('../../controllers/list/MyOfferedServicesApiListController');

router.post('/', MyOfferedServicesApiListController.getList);
router.get('/category_group/', MyOfferedServicesApiListController.getCategoryGroupList);
router.get('/service_group/', MyOfferedServicesApiListController.getServiceGroupList);
router.get('/business_object_group/', MyOfferedServicesApiListController.getBusinessObjectGroupList);
router.get('/users_group/', MyOfferedServicesApiListController.getUsersGroupList);

module.exports  = router;