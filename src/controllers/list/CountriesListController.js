const asyncHandler = require('../../helpers/asyncHandler');
const CountriesListService = require('../../services/list/CountriesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CountriesListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await CountriesListService.getGfNameList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};