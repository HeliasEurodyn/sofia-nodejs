const express = require('express');
const router = express.Router();
const MarketsListController = require('../../controllers/list/MarketsListController');

router.post('/', MarketsListController.getList);

module.exports  = router;