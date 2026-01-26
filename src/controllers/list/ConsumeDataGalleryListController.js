const asyncHandler = require('../../helpers/asyncHandler');
const ConsumeDataGalleryListService = require('../../services/list/ConsumeDataGalleryListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataGalleryListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getLgProviderList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataGalleryListService.getLgProviderList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfServiceOfferingTitleList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataGalleryListService.getGfServiceOfferingTitleList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfTypeHtmlList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataGalleryListService.getGfTypeHtmlList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};