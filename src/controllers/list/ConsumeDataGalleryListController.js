const asyncHandler = require('../../helpers/asyncHandler');
const ConsumeDataGalleryListService = require('../../services/list/ConsumeDataGalleryListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataGalleryListService.getList(req.body);
      res.json(results);
   }),

   getLgProviderList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataGalleryListService.getLgProviderList(req.body);
      res.json(results);
   }),

   getGfServiceOfferingTitleList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataGalleryListService.getGfServiceOfferingTitleList(req.body);
      res.json(results);
   }),

   getGfTypeHtmlList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataGalleryListService.getGfTypeHtmlList(req.body);
      res.json(results);
   })

};