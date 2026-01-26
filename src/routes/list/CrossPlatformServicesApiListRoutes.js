const express = require('express');
const router = express.Router();
const CrossPlatformServicesApiListController = require('../../controllers/list/CrossPlatformServicesApiListController');

router.post('/', CrossPlatformServicesApiListController.getList);
router.get('/category_group/', CrossPlatformServicesApiListController.getCategoryGroupList);
router.get('/service_group/', CrossPlatformServicesApiListController.getServiceGroupList);

module.exports  = router;