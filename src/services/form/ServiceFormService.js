const ServiceModel = require('../../models/crud/ServiceModel');
const ServiceFormModel = require('../../models/form/ServiceFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ServiceModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ServiceModel.remove({
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
