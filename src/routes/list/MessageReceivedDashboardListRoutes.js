const express = require('express');
const router = express.Router();
const MessageReceivedDashboardListController = require('../../controllers/list/MessageReceivedDashboardListController');

router.get('/', MessageReceivedDashboardListController.getList);

module.exports  = router;