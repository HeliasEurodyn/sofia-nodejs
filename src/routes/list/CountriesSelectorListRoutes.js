const express = require('express');
const router = express.Router();
const CountriesSelectorListController = require('../../controllers/list/CountriesSelectorListController');

router.post('/', CountriesSelectorListController.getList);
router.get('/gf_name/', CountriesSelectorListController.getGfNameList);

module.exports  = router;