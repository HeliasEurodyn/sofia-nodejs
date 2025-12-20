const asyncHandler = require('../../helpers/asyncHandler');
const CountriesSelectorListService = require('../../services/list/CountriesSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CountriesSelectorListService.getList(req.body);
      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await CountriesSelectorListService.getGfNameList(req.body);
      res.json(results);
   })

};