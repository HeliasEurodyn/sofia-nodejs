const express = require('express');
const router = express.Router();
const CrossPlatformServiceCommentsUserListController = require('../../controllers/list/CrossPlatformServiceCommentsUserListController');

router.post('/', CrossPlatformServiceCommentsUserListController.getList);

module.exports  = router;