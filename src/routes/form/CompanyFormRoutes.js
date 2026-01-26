const express = require('express');
const router = express.Router();
const CompanyFormController = require('../../controllers/form/CompanyFormController');

router.get('/:id', CompanyFormController.getById);
router.post('/', CompanyFormController.create);
router.put('/', CompanyFormController.update);
router.delete('/:id', CompanyFormController.remove);

module.exports  = router;