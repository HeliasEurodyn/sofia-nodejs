const asyncHandler = require('../../helpers/asyncHandler');
const CountriesSelectorListService = require('../../services/list/CountriesSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CountriesSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await CountriesSelectorListService.getGfNameList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};