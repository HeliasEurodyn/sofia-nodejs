const express = require('express');
const router = express.Router();
const UsersSelectorListController = require('../../controllers/list/UsersSelectorListController');

router.post('/', UsersSelectorListController.getList);
router.get('/gf_name/', UsersSelectorListController.getGfNameList);

module.exports  = router;