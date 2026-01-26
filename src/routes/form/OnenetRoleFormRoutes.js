const express = require('express');
const router = express.Router();
const OnenetRoleFormController = require('../../controllers/form/OnenetRoleFormController');

router.get('/:id', OnenetRoleFormController.getById);
router.post('/', OnenetRoleFormController.create);
router.put('/', OnenetRoleFormController.update);
router.delete('/:id', OnenetRoleFormController.remove);

module.exports  = router;