const asyncHandler = require('../../helpers/asyncHandler');
const FindOfferingsGalleryListService = require('../../services/list/FindOfferingsGalleryListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await FindOfferingsGalleryListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await FindOfferingsGalleryListService.getSqlgf3List(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await FindOfferingsGalleryListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getGfTitleList: asyncHandler(async (req, res) => {
      const results = await FindOfferingsGalleryListService.getGfTitleList(req.body);
      res.json(results);
   })

};