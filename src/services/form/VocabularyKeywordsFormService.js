const VocabularyKeywordsModel = require('../../models/crud/VocabularyKeywordsModel');
const VocabularyKeywordsFormModel = require('../../models/form/VocabularyKeywordsFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return VocabularyKeywordsModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return VocabularyKeywordsModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return VocabularyKeywordsModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return VocabularyKeywordsModel.remove({
         id,
         userId
      });
   };


   module.exports = {
      getById,
      
      create,
      update,
      remove
   };
