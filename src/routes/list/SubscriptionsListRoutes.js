const express = require('express');
const router = express.Router();
const SubscriptionsListController = require('../../controllers/list/SubscriptionsListController');

router.get('/', SubscriptionsListController.getList);

module.exports  = router;