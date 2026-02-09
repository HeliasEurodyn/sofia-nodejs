const express = require('express');
const router = express.Router();
const GraphTemplateListController = require('../../controllers/list/GraphTemplateListController');

router.post('/', GraphTemplateListController.getList);

module.exports  = router;