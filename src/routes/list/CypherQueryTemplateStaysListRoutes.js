const express = require('express');
const router = express.Router();
const CypherQueryTemplateStaysListController = require('../../controllers/list/CypherQueryTemplateStaysListController');

router.post('/', CypherQueryTemplateStaysListController.getList);

module.exports  = router;