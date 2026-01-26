const express = require('express');
const router = express.Router();
const DataCreationServiceOfferingFormController = require('../../controllers/form/DataCreationServiceOfferingFormController');

router.get('/:id', DataCreationServiceOfferingFormController.getById);
router.post('/', DataCreationServiceOfferingFormController.create);
router.put('/', DataCreationServiceOfferingFormController.update);
router.delete('/:id', DataCreationServiceOfferingFormController.remove);

module.exports  = router;