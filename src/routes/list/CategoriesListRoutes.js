const express = require('express');
const router = express.Router();
const CategoriesListController = require('../../controllers/list/CategoriesListController');

router.get('/', CategoriesListController.getList);

module.exports  = router;