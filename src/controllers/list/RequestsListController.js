const asyncHandler = require('../../helpers/asyncHandler');
const RequestsListService = require('../../services/list/RequestsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getCategoryGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getServiceGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getBusinessObjectGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getUsersGroupingList: asyncHandler(async (req, res) => {
      const results = await RequestsListService.getUsersGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};