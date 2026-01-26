const asyncHandler = require('../../helpers/asyncHandler');
const DataConsumedForLocalApiListService = require('../../services/list/DataConsumedForLocalApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataConsumedForLocalApiListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await DataConsumedForLocalApiListService.getCategoryGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await DataConsumedForLocalApiListService.getServiceGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getBusinessObjectGroupingList: asyncHandler(async (req, res) => {
      const results = await DataConsumedForLocalApiListService.getBusinessObjectGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};