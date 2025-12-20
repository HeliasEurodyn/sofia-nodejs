const express = require('express');
const router = express.Router();
const BusinessTagSelectorListController = require('../../controllers/list/BusinessTagSelectorListController');

router.get('/', BusinessTagSelectorListController.getList);

module.exports  = router;