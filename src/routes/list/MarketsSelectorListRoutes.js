const express = require('express');
const router = express.Router();
const MarketsSelectorListController = require('../../controllers/list/MarketsSelectorListController');

router.get('/', MarketsSelectorListController.getList);

module.exports  = router;