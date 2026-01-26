const DataRequestsModel = require('../../models/crud/DataRequestsModel');
const RequestFormModel = require('../../models/form/RequestFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataRequestsModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataRequestsModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataRequestsModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataRequestsModel.remove({
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
