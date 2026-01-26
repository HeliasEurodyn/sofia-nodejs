const asyncHandler = require('../../helpers/asyncHandler');
const ClustersSelectorListService = require('../../services/list/ClustersSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ClustersSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};