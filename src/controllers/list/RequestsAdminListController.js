const asyncHandler = require('../../helpers/asyncHandler');
const RequestsAdminListService = require('../../services/list/RequestsAdminListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await RequestsAdminListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf11List: asyncHandler(async (req, res) => {
      const results = await RequestsAdminListService.getSqlgf11List(req.body);
      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await RequestsAdminListService.getSqlgf1List(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await RequestsAdminListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await RequestsAdminListService.getSqlgf3List(req.body);
      res.json(results);
   })

};