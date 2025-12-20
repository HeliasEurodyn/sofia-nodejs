const asyncHandler = require('../../helpers/asyncHandler');
const ClustersSelectorListService = require('../../services/list/ClustersSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ClustersSelectorListService.getList(req.body);
      res.json(results);
   })

};