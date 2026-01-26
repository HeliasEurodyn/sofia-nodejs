const asyncHandler = require('../../helpers/asyncHandler');
const DataTransactionsPivotListService = require('../../services/list/DataTransactionsPivotListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getSqlgf1List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getSqlgf2List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getSqlgf3List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getGfNameList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfUsernameList: asyncHandler(async (req, res) => {
      const results = await DataTransactionsPivotListService.getGfUsernameList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};