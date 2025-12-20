const asyncHandler = require('../../helpers/asyncHandler');
const ClustersListService = require('../../services/list/ClustersListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ClustersListService.getList(req.body);
      res.json(results);
   })

};