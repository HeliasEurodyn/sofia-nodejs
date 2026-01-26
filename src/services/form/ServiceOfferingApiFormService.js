const ServiceOfferingModel = require('../../models/crud/ServiceOfferingModel');
const ServiceOfferingApiFormModel = require('../../models/form/ServiceOfferingApiFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ServiceOfferingModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceOfferingModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceOfferingModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ServiceOfferingModel.remove({
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
