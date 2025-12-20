const express = require('express');
const router = express.Router();
const CrossPlatformServiceCommentsUserListController = require('../../controllers/list/CrossPlatformServiceCommentsUserListController');

router.get('/', CrossPlatformServiceCommentsUserListController.getList);

module.exports  = router;