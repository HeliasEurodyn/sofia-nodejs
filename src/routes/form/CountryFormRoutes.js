const express = require('express');
const router = express.Router();
const CountryFormController = require('../../controllers/form/CountryFormController');

router.get('/:id', CountryFormController.getById);
router.post('/', CountryFormController.create);
router.put('/', CountryFormController.update);
router.delete('/:id', CountryFormController.remove);
router.get('/cluster/:id', CountryFormController.getclusterById);

module.exports  = router;