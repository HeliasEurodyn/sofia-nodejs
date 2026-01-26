const express = require('express');
const router = express.Router();
const ConsumeDataFormController = require('../../controllers/form/ConsumeDataFormController');

router.get('/:id', ConsumeDataFormController.getById);
router.post('/', ConsumeDataFormController.create);
router.put('/', ConsumeDataFormController.update);
router.delete('/:id', ConsumeDataFormController.remove);

module.exports  = router;