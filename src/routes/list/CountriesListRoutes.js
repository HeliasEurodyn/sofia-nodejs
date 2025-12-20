const express = require('express');
const router = express.Router();
const CountriesListController = require('../../controllers/list/CountriesListController');

router.get('/', CountriesListController.getList);
router.get('/gf_name/', CountriesListController.getGfNameList);

module.exports  = router;