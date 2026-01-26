const asyncHandler = require('../../helpers/asyncHandler');
const MySubscriptionsListService = require('../../services/list/MySubscriptionsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getCategoryGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getServiceGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getBusinessObjectGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getUsersGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsListService.getUsersGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};