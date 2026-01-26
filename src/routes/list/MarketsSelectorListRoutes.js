const express = require('express');
const router = express.Router();
const MarketsSelectorListController = require('../../controllers/list/MarketsSelectorListController');

router.post('/', MarketsSelectorListController.getList);

module.exports  = router;