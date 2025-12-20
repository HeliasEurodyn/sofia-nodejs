const asyncHandler = require('../../helpers/asyncHandler');
const VocabularyKeywordsListService = require('../../services/list/VocabularyKeywordsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await VocabularyKeywordsListService.getList(req.body);
      res.json(results);
   })

};