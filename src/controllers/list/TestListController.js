const asyncHandler = require('../../helpers/asyncHandler');
const TestListService = require('../../services/list/TestListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await TestListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};