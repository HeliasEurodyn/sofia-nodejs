const MarketModel = require('../../models/crud/MarketModel');
const MarketFormModel = require('../../models/form/MarketFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return MarketModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MarketModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MarketModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return MarketModel.remove({
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
