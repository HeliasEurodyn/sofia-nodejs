const express = require('express');
const router = express.Router();
const CypherQueryTemplateSelectorListController = require('../../controllers/list/CypherQueryTemplateSelectorListController');

router.post('/', CypherQueryTemplateSelectorListController.getList);

module.exports  = router;