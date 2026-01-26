const asyncHandler = require('../../helpers/asyncHandler');
const AllOfferingsSelectorListService = require('../../services/list/AllOfferingsSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await AllOfferingsSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getOwnerLeftFilterList: asyncHandler(async (req, res) => {
      const results = await AllOfferingsSelectorListService.getOwnerLeftFilterList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfDataSharingMethodList: asyncHandler(async (req, res) => {
      const results = await AllOfferingsSelectorListService.getGfDataSharingMethodList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};