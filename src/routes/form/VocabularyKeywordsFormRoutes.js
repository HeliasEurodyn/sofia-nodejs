const express = require('express');
const router = express.Router();
const VocabularyKeywordsFormController = require('../../controllers/form/VocabularyKeywordsFormController');

router.get('/:id', VocabularyKeywordsFormController.getById);
router.post('/', VocabularyKeywordsFormController.create);
router.put('/', VocabularyKeywordsFormController.update);
router.delete('/:id', VocabularyKeywordsFormController.remove);

module.exports  = router;