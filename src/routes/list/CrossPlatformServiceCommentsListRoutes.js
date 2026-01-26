const express = require('express');
const router = express.Router();
const CrossPlatformServiceCommentsListController = require('../../controllers/list/CrossPlatformServiceCommentsListController');

router.post('/', CrossPlatformServiceCommentsListController.getList);

module.exports  = router;