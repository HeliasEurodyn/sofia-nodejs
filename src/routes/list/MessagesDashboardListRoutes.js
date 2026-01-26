const express = require('express');
const router = express.Router();
const MessagesDashboardListController = require('../../controllers/list/MessagesDashboardListController');

router.post('/', MessagesDashboardListController.getList);

module.exports  = router;