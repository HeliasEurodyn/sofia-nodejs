const asyncHandler = require('../../helpers/asyncHandler');
const FindOfferingsGalleryListService = require('../../services/list/FindOfferingsGalleryListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await FindOfferingsGalleryListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await FindOfferingsGalleryListService.getSqlgf3List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await FindOfferingsGalleryListService.getSqlgf2List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfTitleList: asyncHandler(async (req, res) => {
      const results = await FindOfferingsGalleryListService.getGfTitleList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};