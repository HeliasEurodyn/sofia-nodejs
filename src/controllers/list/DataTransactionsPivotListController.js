const asyncHandler = require('../../helpers/asyncHandler');
const DataTransactionsPivotListService = require('../../services/list/DataTransactionsPivotListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getSqlgf1List(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getSqlgf3List(req.body);
      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getGfNameList(req.body);
      res.json(results);
   }),

   getGfUsernameList: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getGfUsernameList(req.body);
      res.json(results);
   })

};