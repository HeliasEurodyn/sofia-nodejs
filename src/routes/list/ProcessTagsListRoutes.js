const express = require('express');
const router = express.Router();
const ProcessTagsListController = require('../../controllers/list/ProcessTagsListController');

router.post('/', ProcessTagsListController.getList);

module.exports  = router;