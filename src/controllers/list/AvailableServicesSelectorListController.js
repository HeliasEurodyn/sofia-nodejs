const asyncHandler = require('../../helpers/asyncHandler');
const AvailableServicesSelectorListService = require('../../services/list/AvailableServicesSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await AvailableServicesSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await AvailableServicesSelectorListService.getSqlgf1List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await AvailableServicesSelectorListService.getSqlgf2List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await AvailableServicesSelectorListService.getSqlgf3List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf4List: asyncHandler(async (req, res) => {
      const results = await AvailableServicesSelectorListService.getSqlgf4List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};