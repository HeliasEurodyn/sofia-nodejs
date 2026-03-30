const express = require('express');
const router = express.Router();
const RelathionshipTypeFormController = require('../../controllers/form/RelathionshipTypeFormController');

router.get('/:id', RelathionshipTypeFormController.getById);
router.post('/', RelathionshipTypeFormController.create);
router.put('/', RelathionshipTypeFormController.update);
router.delete('/:id', RelathionshipTypeFormController.remove);

module.exports  = router;