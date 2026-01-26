const asyncHandler = require('../../helpers/asyncHandler');
const ConsumeDataListService = require('../../services/list/ConsumeDataListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ConsumeDataListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await ConsumeDataListService.getSqlgf1List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await ConsumeDataListService.getSqlgf2List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await ConsumeDataListService.getSqlgf3List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};