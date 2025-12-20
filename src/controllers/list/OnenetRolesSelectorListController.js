const asyncHandler = require('../../helpers/asyncHandler');
const OnenetRolesSelectorListService = require('../../services/list/OnenetRolesSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await OnenetRolesSelectorListService.getList(req.body);
      res.json(results);
   })

};