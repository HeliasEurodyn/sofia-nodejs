const asyncHandler = require('../../helpers/asyncHandler');
const DataProvidedForLocalApiListService = require('../../services/list/DataProvidedForLocalApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataProvidedForLocalApiListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await DataProvidedForLocalApiListService.getCategoryGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await DataProvidedForLocalApiListService.getServiceGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await DataProvidedForLocalApiListService.getBusinessObjectGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};