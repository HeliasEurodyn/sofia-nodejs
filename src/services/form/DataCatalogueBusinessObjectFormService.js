const DataCatalogueBusinessObjectModel = require('../../models/crud/DataCatalogueBusinessObjectModel');
const DataCatalogueBusinessObjectFormModel = require('../../models/form/DataCatalogueBusinessObjectFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueBusinessObjectModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueBusinessObjectModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueBusinessObjectModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueBusinessObjectModel.remove({
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
