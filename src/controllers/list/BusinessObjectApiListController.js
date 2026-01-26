const asyncHandler = require('../../helpers/asyncHandler');
const BusinessObjectApiListService = require('../../services/list/BusinessObjectApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await BusinessObjectApiListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCategoryGroupingList: asyncHandler(async (req, res) => {
      const results = await BusinessObjectApiListService.getCategoryGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getServiceGroupingList: asyncHandler(async (req, res) => {
      const results = await BusinessObjectApiListService.getServiceGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};