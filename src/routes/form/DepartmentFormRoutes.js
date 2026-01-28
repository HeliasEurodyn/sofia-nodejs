const express = require('express');
const router = express.Router();
const DepartmentFormController = require('../../controllers/form/DepartmentFormController');

router.get('/:id', DepartmentFormController.getById);
router.post('/', DepartmentFormController.create);
router.put('/', DepartmentFormController.update);
router.delete('/:id', DepartmentFormController.remove);

module.exports  = router;