const IdsResourcesModel = require('../../models/crud/IdsResourcesModel');
const MessagesFormModel = require('../../models/form/MessagesFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return IdsResourcesModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return IdsResourcesModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return IdsResourcesModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return IdsResourcesModel.remove({
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
