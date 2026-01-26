const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferedServicesListService = require('../../services/list/MyOfferedServicesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesListService.getSqlgf1List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesListService.getSqlgf2List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesListService.getSqlgf3List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf4List: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesListService.getSqlgf4List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};