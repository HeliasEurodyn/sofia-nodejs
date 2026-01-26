const DataOfferingsModel = require('../../models/crud/DataOfferingsModel');
const OfferedServiceFormModel = require('../../models/form/OfferedServiceFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataOfferingsModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataOfferingsModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataOfferingsModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataOfferingsModel.remove({
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
