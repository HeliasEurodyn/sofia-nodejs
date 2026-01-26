const express = require('express');
const router = express.Router();
const ProcessTagFormController = require('../../controllers/form/ProcessTagFormController');

router.get('/:id', ProcessTagFormController.getById);
router.post('/', ProcessTagFormController.create);
router.put('/', ProcessTagFormController.update);
router.delete('/:id', ProcessTagFormController.remove);

module.exports  = router;