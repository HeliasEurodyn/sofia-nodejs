const asyncHandler = require('../../helpers/asyncHandler');
const ServiceCatalogueListService = require('../../services/list/ServiceCatalogueListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ServiceCatalogueListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await ServiceCatalogueListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await ServiceCatalogueListService.getSqlgf3List(req.body);
      res.json(results);
   })

};