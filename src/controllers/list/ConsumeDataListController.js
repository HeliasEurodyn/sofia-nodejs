const asyncHandler = require('../../helpers/asyncHandler');
const ConsumeDataListService = require('../../services/list/ConsumeDataListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await ConsumeDataListService.getSqlgf1List(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await ConsumeDataListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await ConsumeDataListService.getSqlgf3List(req.body);
      res.json(results);
   })

};