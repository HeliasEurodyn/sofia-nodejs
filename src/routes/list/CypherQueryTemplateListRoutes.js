const express = require('express');
const router = express.Router();
const CypherQueryTemplateListController = require('../../controllers/list/CypherQueryTemplateListController');

router.post('/', CypherQueryTemplateListController.getList);

module.exports  = router;