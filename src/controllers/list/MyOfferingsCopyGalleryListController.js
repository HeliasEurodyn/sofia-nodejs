const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferingsCopyGalleryListService = require('../../services/list/MyOfferingsCopyGalleryListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsCopyGalleryListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await MyOfferingsCopyGalleryListService.getSqlgf1List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await MyOfferingsCopyGalleryListService.getSqlgf2List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfTitleList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsCopyGalleryListService.getGfTitleList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};