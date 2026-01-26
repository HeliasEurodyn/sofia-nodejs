const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferingsSelectorListService = require('../../services/list/MyOfferingsSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getOwnerLeftFilterList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsSelectorListService.getOwnerLeftFilterList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfDataSharingMethodList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsSelectorListService.getGfDataSharingMethodList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};