const DataCatalogBusinessObjectCommentsModel = require('../../models/crud/DataCatalogBusinessObjectCommentsModel');
const CrossPlatformServiceCommentsAdminFormModel = require('../../models/form/CrossPlatformServiceCommentsAdminFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogBusinessObjectCommentsModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogBusinessObjectCommentsModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogBusinessObjectCommentsModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogBusinessObjectCommentsModel.remove({
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
