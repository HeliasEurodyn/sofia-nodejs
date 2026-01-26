const asyncHandler = require('../../helpers/asyncHandler');
const DataCatalogueServicesListService = require('../../services/list/DataCatalogueServicesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesListService.getSqlgf1List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};