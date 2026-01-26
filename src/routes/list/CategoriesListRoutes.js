const express = require('express');
const router = express.Router();
const CategoriesListController = require('../../controllers/list/CategoriesListController');

router.post('/', CategoriesListController.getList);

module.exports  = router;