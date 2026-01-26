const express = require('express');
const router = express.Router();
const ServiceOfferingApiFormController = require('../../controllers/form/ServiceOfferingApiFormController');

router.get('/:id', ServiceOfferingApiFormController.getById);
router.post('/', ServiceOfferingApiFormController.create);
router.put('/', ServiceOfferingApiFormController.update);
router.delete('/:id', ServiceOfferingApiFormController.remove);

module.exports  = router;