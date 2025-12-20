const asyncHandler = require('../../helpers/asyncHandler');
const TransuctionsPivotListService = require('../../services/list/TransuctionsPivotListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await TransuctionsPivotListService.getList(req.body);
      res.json(results);
   }),

   getGfProviderList: asyncHandler(async (req, res) => {
      const results = await TransuctionsPivotListService.getGfProviderList(req.body);
      res.json(results);
   }),

   getGfOfferingTitleList: asyncHandler(async (req, res) => {
      const results = await TransuctionsPivotListService.getGfOfferingTitleList(req.body);
      res.json(results);
   })

};