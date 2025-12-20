const express = require('express');
const router = express.Router();
const BusinessTagsListController = require('../../controllers/list/BusinessTagsListController');

router.get('/', BusinessTagsListController.getList);

module.exports  = router;