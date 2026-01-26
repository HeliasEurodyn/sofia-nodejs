const express = require('express');
const router = express.Router();
const CompaniesSelectorListController = require('../../controllers/list/CompaniesSelectorListController');

router.post('/', CompaniesSelectorListController.getList);

module.exports  = router;