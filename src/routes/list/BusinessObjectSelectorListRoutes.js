const express = require('express');
const router = express.Router();
const BusinessObjectSelectorListController = require('../../controllers/list/BusinessObjectSelectorListController');

router.get('/', BusinessObjectSelectorListController.getList);
router.get('/sqlgf_2/', BusinessObjectSelectorListController.getSqlgf2List);
router.get('/sqlgf_3/', BusinessObjectSelectorListController.getSqlgf3List);

module.exports  = router;