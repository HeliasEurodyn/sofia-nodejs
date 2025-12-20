const asyncHandler = require('../../helpers/asyncHandler');
const DataConsumedForLocalApiListService = require('../../services/list/DataConsumedForLocalApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataConsumedForLocalApiListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await DataConsumedForLocalApiListService.getCategoryGroupingList(req.body);
      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await DataConsumedForLocalApiListService.getServiceGroupingList(req.body);
      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await DataConsumedForLocalApiListService.getBusinessObjectGroupingList(req.body);
      res.json(results);
   })

};