const DataCatalogueServiceModel = require('../../models/crud/DataCatalogueServiceModel');
const DataCatalogueServiceFormModel = require('../../models/form/DataCatalogueServiceFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServiceModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServiceModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServiceModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServiceModel.remove({
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
