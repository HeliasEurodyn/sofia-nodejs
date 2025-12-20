const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferedServicesForLocalApiListService = require('../../services/list/MyOfferedServicesForLocalApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyOfferedServicesForLocalApiListService.getList(req.body);
      res.json(results);
   })

};