const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferedServicesApiListService = require('../../services/list/MyOfferedServicesApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getCategoryGroupList(req.body);
      res.json(results);
   }),

   getServiceGroupList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getServiceGroupList(req.body);
      res.json(results);
   }),

   getBusinessObjectGroupList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getBusinessObjectGroupList(req.body);
      res.json(results);
   }),

   getUsersGroupList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesApiListService.getUsersGroupList(req.body);
      res.json(results);
   })

};