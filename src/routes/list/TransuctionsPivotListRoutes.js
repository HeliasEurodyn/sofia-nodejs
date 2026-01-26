const express = require('express');
const router = express.Router();
const TransuctionsPivotListController = require('../../controllers/list/TransuctionsPivotListController');

router.post('/', TransuctionsPivotListController.getList);
router.get('/gf_provider/', TransuctionsPivotListController.getGfProviderList);
router.get('/gf_offering_title/', TransuctionsPivotListController.getGfOfferingTitleList);

module.exports  = router;