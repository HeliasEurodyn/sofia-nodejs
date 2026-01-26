const express = require('express');
const router = express.Router();
const ProcessTagsSelectorListController = require('../../controllers/list/ProcessTagsSelectorListController');

router.post('/', ProcessTagsSelectorListController.getList);

module.exports  = router;