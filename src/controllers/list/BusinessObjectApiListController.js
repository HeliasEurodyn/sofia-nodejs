const asyncHandler = require('../../helpers/asyncHandler');
const BusinessObjectApiListService = require('../../services/list/BusinessObjectApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await BusinessObjectApiListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await BusinessObjectApiListService.getCategoryGroupingList(req.body);
      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await BusinessObjectApiListService.getServiceGroupingList(req.body);
      res.json(results);
   })

};