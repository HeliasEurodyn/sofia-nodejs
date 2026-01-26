const express = require('express');
const router = express.Router();
const MessagesListController = require('../../controllers/list/MessagesListController');

router.post('/', MessagesListController.getList);

module.exports  = router;