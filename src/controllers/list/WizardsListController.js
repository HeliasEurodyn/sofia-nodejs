const asyncHandler = require('../../helpers/asyncHandler');
const WizardsListService = require('../../services/list/WizardsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await WizardsListService.getList(req.body);
      res.json(results);
   })

};