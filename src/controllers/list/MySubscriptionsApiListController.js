const asyncHandler = require('../../helpers/asyncHandler');
const MySubscriptionsApiListService = require('../../services/list/MySubscriptionsApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getCategoryGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getServiceGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getBusinessObjectGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getUsersGroupingList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsApiListService.getUsersGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};