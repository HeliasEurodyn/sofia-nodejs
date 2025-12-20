const asyncHandler = require('../../helpers/asyncHandler');
const AllOfferingsSelectorListService = require('../../services/list/AllOfferingsSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await AllOfferingsSelectorListService.getList(req.body);
      res.json(results);
   }),

   getOwnerLeftFilterList: asyncHandler(async (req, res) => {
      const results = await AllOfferingsSelectorListService.getOwnerLeftFilterList(req.body);
      res.json(results);
   }),

   getGfDataSharingMethodList: asyncHandler(async (req, res) => {
      const results = await AllOfferingsSelectorListService.getGfDataSharingMethodList(req.body);
      res.json(results);
   })

};