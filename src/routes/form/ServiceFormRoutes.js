const express = require('express');
const router = express.Router();
const ServiceFormController = require('../../controllers/form/ServiceFormController');

router.get('/:id', ServiceFormController.getById);
router.post('/', ServiceFormController.create);
router.put('/', ServiceFormController.update);
router.delete('/:id', ServiceFormController.remove);

module.exports  = router;