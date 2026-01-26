const asyncHandler = require('../../helpers/asyncHandler');
const ClustersListService = require('../../services/list/ClustersListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ClustersListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};