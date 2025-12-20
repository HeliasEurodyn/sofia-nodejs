const asyncHandler = require('../../helpers/asyncHandler');
const RequestsListService = require('../../services/list/RequestsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getCategoryGroupingList(req.body);
      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getServiceGroupingList(req.body);
      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getBusinessObjectGroupingList(req.body);
      res.json(results);
   }),

   getUsersGroupingList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getUsersGroupingList(req.body);
      res.json(results);
   })

};