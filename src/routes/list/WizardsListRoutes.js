const express = require('express');
const router = express.Router();
const WizardsListController = require('../../controllers/list/WizardsListController');

router.get('/', WizardsListController.getList);

module.exports  = router;