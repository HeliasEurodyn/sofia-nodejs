const express = require('express');
const router = express.Router();
const RequestsAdminListController = require('../../controllers/list/RequestsAdminListController');

router.post('/', RequestsAdminListController.getList);
router.get('/sqlgf_1_1/', RequestsAdminListController.getSqlgf11List);
router.get('/sqlgf_1/', RequestsAdminListController.getSqlgf1List);
router.get('/sqlgf_2/', RequestsAdminListController.getSqlgf2List);
router.get('/sqlgf_3/', RequestsAdminListController.getSqlgf3List);

module.exports  = router;