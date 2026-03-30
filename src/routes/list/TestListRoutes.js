const express = require('express');
const router = express.Router();
const TestListController = require('../../controllers/list/TestListController');

router.post('/', TestListController.getList);

module.exports  = router;