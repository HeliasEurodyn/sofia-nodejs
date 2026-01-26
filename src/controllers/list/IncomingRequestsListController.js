const asyncHandler = require('../../helpers/asyncHandler');
const IncomingRequestsListService = require('../../services/list/IncomingRequestsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await IncomingRequestsListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};