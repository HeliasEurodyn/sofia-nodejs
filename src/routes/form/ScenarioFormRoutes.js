const express = require('express');
const router = express.Router();
const ScenarioFormController = require('../../controllers/form/ScenarioFormController');

router.get('/:id', ScenarioFormController.getById);
router.post('/', ScenarioFormController.create);
router.put('/', ScenarioFormController.update);
router.delete('/:id', ScenarioFormController.remove);

module.exports  = router;