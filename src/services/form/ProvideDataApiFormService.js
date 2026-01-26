const ProvideDataModel = require('../../models/crud/ProvideDataModel');
const ProvideDataApiFormModel = require('../../models/form/ProvideDataApiFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ProvideDataModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProvideDataModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProvideDataModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ProvideDataModel.remove({
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
