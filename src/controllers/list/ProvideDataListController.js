const asyncHandler = require('../../helpers/asyncHandler');
const ProvideDataListService = require('../../services/list/ProvideDataListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ProvideDataListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await ProvideDataListService.getCategoryGroupingList(req.body);
      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await ProvideDataListService.getServiceGroupingList(req.body);
      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await ProvideDataListService.getBusinessObjectGroupingList(req.body);
      res.json(results);
   })

};