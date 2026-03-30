const express = require('express');
const router = express.Router();
const GraphTemplateSelectorListController = require('../../controllers/list/GraphTemplateSelectorListController');

router.post('/', GraphTemplateSelectorListController.getList);

module.exports  = router;