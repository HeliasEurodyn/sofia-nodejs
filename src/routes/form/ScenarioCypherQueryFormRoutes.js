const express = require('express');
const router = express.Router();
const ScenarioCypherQueryFormController = require('../../controllers/form/ScenarioCypherQueryFormController');

router.get('/:id', ScenarioCypherQueryFormController.getById);
router.post('/', ScenarioCypherQueryFormController.create);
router.put('/', ScenarioCypherQueryFormController.update);
router.delete('/:id', ScenarioCypherQueryFormController.remove);

module.exports  = router;