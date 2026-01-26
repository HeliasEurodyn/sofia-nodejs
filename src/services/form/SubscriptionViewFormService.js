const SubscriptionModel = require('../../models/crud/SubscriptionModel');
const SubscriptionViewFormModel = require('../../models/form/SubscriptionViewFormModel');

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

   const getoffering_app_viewById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return SubscriptionViewFormModel.getoffering_app_viewById({
         id,
         userId
      });
   };

   module.exports = {
      getById,
      getoffering_app_viewById,
      create,
      update,
      remove
   };
