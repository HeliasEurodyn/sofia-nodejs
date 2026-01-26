const ProcessTagModel = require('../../models/crud/ProcessTagModel');
const ProcessTagFormModel = require('../../models/form/ProcessTagFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ProcessTagModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProcessTagModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProcessTagModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ProcessTagModel.remove({
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
