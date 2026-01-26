const DataReceivedModel = require('../../models/crud/DataReceivedModel');
const ConsumeDataFormModel = require('../../models/form/ConsumeDataFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataReceivedModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataReceivedModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataReceivedModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataReceivedModel.remove({
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
