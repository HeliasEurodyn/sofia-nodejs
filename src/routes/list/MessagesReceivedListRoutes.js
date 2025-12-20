const express = require('express');
const router = express.Router();
const MessagesReceivedListController = require('../../controllers/list/MessagesReceivedListController');

router.get('/', MessagesReceivedListController.getList);

module.exports  = router;