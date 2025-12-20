const asyncHandler = require('../../helpers/asyncHandler');
const CountriesListService = require('../../services/list/CountriesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CountriesListService.getList(req.body);
      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await CountriesListService.getGfNameList(req.body);
      res.json(results);
   })

};