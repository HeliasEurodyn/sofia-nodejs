const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferingsSelectorListService = require('../../services/list/MyOfferingsSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsSelectorListService.getList(req.body);
      res.json(results);
   }),

   getOwnerLeftFilterList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsSelectorListService.getOwnerLeftFilterList(req.body);
      res.json(results);
   }),

   getGfDataSharingMethodList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsSelectorListService.getGfDataSharingMethodList(req.body);
      res.json(results);
   })

};