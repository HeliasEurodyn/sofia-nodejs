const asyncHandler = require('../../helpers/asyncHandler');
const MySubscriptionsListService = require('../../services/list/MySubscriptionsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getCategoryGroupingList(req.body);
      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getServiceGroupingList(req.body);
      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getBusinessObjectGroupingList(req.body);
      res.json(results);
   }),

   getUsersGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getUsersGroupingList(req.body);
      res.json(results);
   })

};