const express = require('express');
const router = express.Router();
const AllOfferingsSelectorListController = require('../../controllers/list/AllOfferingsSelectorListController');

router.get('/', AllOfferingsSelectorListController.getList);
router.get('/owner_left_filter/', AllOfferingsSelectorListController.getOwnerLeftFilterList);
router.get('/gf_data_sharing_method/', AllOfferingsSelectorListController.getGfDataSharingMethodList);

module.exports  = router;