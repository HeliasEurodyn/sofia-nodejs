const asyncHandler = require('../../helpers/asyncHandler');
const BusinessObjectSelectorListService = require('../../services/list/BusinessObjectSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await BusinessObjectSelectorListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await BusinessObjectSelectorListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await BusinessObjectSelectorListService.getSqlgf3List(req.body);
      res.json(results);
   })

};