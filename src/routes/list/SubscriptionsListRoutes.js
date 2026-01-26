const express = require('express');
const router = express.Router();
const SubscriptionsListController = require('../../controllers/list/SubscriptionsListController');

router.post('/', SubscriptionsListController.getList);

module.exports  = router;