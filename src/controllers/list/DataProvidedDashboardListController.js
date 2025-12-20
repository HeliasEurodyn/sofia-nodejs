const asyncHandler = require('../../helpers/asyncHandler');
const DataProvidedDashboardListService = require('../../services/list/DataProvidedDashboardListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataProvidedDashboardListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await DataProvidedDashboardListService.getSqlgf1List(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await DataProvidedDashboardListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await DataProvidedDashboardListService.getSqlgf3List(req.body);
      res.json(results);
   })

};