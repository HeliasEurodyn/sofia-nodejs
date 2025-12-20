const express = require('express');
const router = express.Router();
const CountriesSelectorListController = require('../../controllers/list/CountriesSelectorListController');

router.get('/', CountriesSelectorListController.getList);
router.get('/gf_name/', CountriesSelectorListController.getGfNameList);

module.exports  = router;