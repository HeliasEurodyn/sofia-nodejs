const express = require('express');
const router = express.Router();
const VocabularyKeywordsListController = require('../../controllers/list/VocabularyKeywordsListController');

router.get('/', VocabularyKeywordsListController.getList);

module.exports  = router;