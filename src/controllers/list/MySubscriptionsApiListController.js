const asyncHandler = require('../../helpers/asyncHandler');
const MySubscriptionsApiListService = require('../../services/list/MySubscriptionsApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getCategoryGroupingList(req.body);
      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getServiceGroupingList(req.body);
      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getBusinessObjectGroupingList(req.body);
      res.json(results);
   }),

   getUsersGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getUsersGroupingList(req.body);
      res.json(results);
   })

};