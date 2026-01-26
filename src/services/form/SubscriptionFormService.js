const SubscriptionModel = require('../../models/crud/SubscriptionModel');
const SubscriptionFormModel = require('../../models/form/SubscriptionFormModel');

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

      return SubscriptionFormModel.getoffering_app_viewById({
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
