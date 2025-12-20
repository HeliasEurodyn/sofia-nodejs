const express = require('express');
const router = express.Router();
const MessagesListController = require('../../controllers/list/MessagesListController');

router.get('/', MessagesListController.getList);

module.exports  = router;