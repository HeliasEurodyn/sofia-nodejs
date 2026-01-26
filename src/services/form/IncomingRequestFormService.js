const SubscriptionModel = require('../../models/crud/SubscriptionModel');
const IncomingRequestFormModel = require('../../models/form/IncomingRequestFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return SubscriptionModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return SubscriptionModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return SubscriptionModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return SubscriptionModel.remove({
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
