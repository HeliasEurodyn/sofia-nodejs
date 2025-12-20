const asyncHandler = require('../../helpers/asyncHandler');
const DataProvidedForLocalApiListService = require('../../services/list/DataProvidedForLocalApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataProvidedForLocalApiListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await DataProvidedForLocalApiListService.getCategoryGroupingList(req.body);
      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await DataProvidedForLocalApiListService.getServiceGroupingList(req.body);
      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await DataProvidedForLocalApiListService.getBusinessObjectGroupingList(req.body);
      res.json(results);
   })

};