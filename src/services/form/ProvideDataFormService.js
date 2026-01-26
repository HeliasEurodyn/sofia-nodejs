const DataSendModel = require('../../models/crud/DataSendModel');
const ProvideDataFormModel = require('../../models/form/ProvideDataFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataSendModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataSendModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataSendModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataSendModel.remove({
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
