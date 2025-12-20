const asyncHandler = require('../../helpers/asyncHandler');
const UsersListService = require('../../services/list/UsersListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await UsersListService.getList(req.body);
      res.json(results);
   })

};