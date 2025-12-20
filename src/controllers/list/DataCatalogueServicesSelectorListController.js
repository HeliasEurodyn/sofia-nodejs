const asyncHandler = require('../../helpers/asyncHandler');
const DataCatalogueServicesSelectorListService = require('../../services/list/DataCatalogueServicesSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesSelectorListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesSelectorListService.getSqlgf1List(req.body);
      res.json(results);
   })

};