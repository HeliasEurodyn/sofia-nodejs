const express = require('express');
const router = express.Router();
const CrossPlatformServiceFormController = require('../../controllers/form/CrossPlatformServiceFormController');

router.get('/:id', CrossPlatformServiceFormController.getById);
router.post('/', CrossPlatformServiceFormController.create);
router.put('/', CrossPlatformServiceFormController.update);
router.delete('/:id', CrossPlatformServiceFormController.remove);
router.get('/wizards/:id', CrossPlatformServiceFormController.getwizardsById);

module.exports  = router;