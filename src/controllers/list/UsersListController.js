const asyncHandler = require('../../helpers/asyncHandler');
const UsersListService = require('../../services/list/UsersListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await UsersListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};