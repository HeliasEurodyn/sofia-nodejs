const express = require('express');
const router = express.Router();
const WizardsListController = require('../../controllers/list/WizardsListController');

router.post('/', WizardsListController.getList);

module.exports  = router;