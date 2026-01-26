const express = require('express');
const router = express.Router();
const IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormController = require('../../controllers/form/IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormController');

router.get('/:id', IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormController.getById);
router.post('/', IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormController.create);
router.put('/', IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormController.update);
router.delete('/:id', IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormController.remove);

module.exports  = router;