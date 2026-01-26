const asyncHandler = require('../../helpers/asyncHandler');
const BusinessTagsListService = require('../../services/list/BusinessTagsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await BusinessTagsListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};