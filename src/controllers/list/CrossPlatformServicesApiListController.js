const asyncHandler = require('../../helpers/asyncHandler');
const CrossPlatformServicesApiListService = require('../../services/list/CrossPlatformServicesApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServicesApiListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServicesApiListService.getCategoryGroupList(req.body);
      res.json(results);
   }),

   getServiceGroupList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServicesApiListService.getServiceGroupList(req.body);
      res.json(results);
   })

};