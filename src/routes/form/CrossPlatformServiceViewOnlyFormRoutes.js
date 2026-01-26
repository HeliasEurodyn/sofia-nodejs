const express = require('express');
const router = express.Router();
const CrossPlatformServiceViewOnlyFormController = require('../../controllers/form/CrossPlatformServiceViewOnlyFormController');

router.get('/:id', CrossPlatformServiceViewOnlyFormController.getById);
router.post('/', CrossPlatformServiceViewOnlyFormController.create);
router.put('/', CrossPlatformServiceViewOnlyFormController.update);
router.delete('/:id', CrossPlatformServiceViewOnlyFormController.remove);

module.exports  = router;