const express = require('express');
const router = express.Router();
const MyOfferingsSelectorListController = require('../../controllers/list/MyOfferingsSelectorListController');

router.post('/', MyOfferingsSelectorListController.getList);
router.get('/owner_left_filter/', MyOfferingsSelectorListController.getOwnerLeftFilterList);
router.get('/gf_data_sharing_method/', MyOfferingsSelectorListController.getGfDataSharingMethodList);

module.exports  = router;