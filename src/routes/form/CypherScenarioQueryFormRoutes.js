const express = require('express');
const router = express.Router();
const CypherScenarioQueryFormController = require('../../controllers/form/CypherScenarioQueryFormController');

router.get('/:id', CypherScenarioQueryFormController.getById);
router.post('/', CypherScenarioQueryFormController.create);
router.put('/', CypherScenarioQueryFormController.update);
router.delete('/:id', CypherScenarioQueryFormController.remove);

module.exports  = router;