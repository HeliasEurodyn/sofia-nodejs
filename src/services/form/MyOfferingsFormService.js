const ServiceOfferingModel = require('../../models/crud/ServiceOfferingModel');
const MyOfferingsFormModel = require('../../models/form/MyOfferingsFormModel');

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

   const getservice_app_viewById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return MyOfferingsFormModel.getservice_app_viewById({
         id,
         userId
      });
   };

   module.exports = {
      getById,
      getservice_app_viewById,
      create,
      update,
      remove
   };
