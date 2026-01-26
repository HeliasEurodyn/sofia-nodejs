const BusinessTagsModel = require('../../models/crud/BusinessTagsModel');
const BusinessTagFormModel = require('../../models/form/BusinessTagFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return BusinessTagsModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessTagsModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessTagsModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return BusinessTagsModel.remove({
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
