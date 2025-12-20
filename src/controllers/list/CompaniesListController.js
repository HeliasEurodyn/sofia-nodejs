const asyncHandler = require('../../helpers/asyncHandler');
const CompaniesListService = require('../../services/list/CompaniesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CompaniesListService.getList(req.body);
      res.json(results);
   })

};