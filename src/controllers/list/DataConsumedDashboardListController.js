const asyncHandler = require('../../helpers/asyncHandler');
const DataConsumedDashboardListService = require('../../services/list/DataConsumedDashboardListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataConsumedDashboardListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await DataConsumedDashboardListService.getSqlgf1List(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await DataConsumedDashboardListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await DataConsumedDashboardListService.getSqlgf3List(req.body);
      res.json(results);
   })

};