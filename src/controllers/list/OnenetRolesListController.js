const asyncHandler = require('../../helpers/asyncHandler');
const OnenetRolesListService = require('../../services/list/OnenetRolesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await OnenetRolesListService.getList(req.body);
      res.json(results);
   })

};