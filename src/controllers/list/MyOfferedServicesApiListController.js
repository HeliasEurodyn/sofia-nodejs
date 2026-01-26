const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferedServicesApiListService = require('../../services/list/MyOfferedServicesApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCategoryGroupList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getCategoryGroupList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getServiceGroupList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getServiceGroupList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getBusinessObjectGroupList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getBusinessObjectGroupList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getUsersGroupList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getUsersGroupList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};