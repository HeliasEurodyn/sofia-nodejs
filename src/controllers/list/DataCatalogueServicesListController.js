const asyncHandler = require('../../helpers/asyncHandler');
const DataCatalogueServicesListService = require('../../services/list/DataCatalogueServicesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesListService.getSqlgf1List(req.body);
      res.json(results);
   })

};