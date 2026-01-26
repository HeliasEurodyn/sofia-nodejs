const VocabularyKeywordsListModel = require('../../models/list/VocabularyKeywordsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return VocabularyKeywordsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
