const asyncHandler = require('../../helpers/asyncHandler');
const MessagesListService = require('../../services/list/MessagesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MessagesListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};