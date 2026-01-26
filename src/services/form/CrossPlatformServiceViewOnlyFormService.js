const DataCatalogueBusinessObject2Model = require('../../models/crud/DataCatalogueBusinessObject2Model');
const CrossPlatformServiceViewOnlyFormModel = require('../../models/form/CrossPlatformServiceViewOnlyFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueBusinessObject2Model.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueBusinessObject2Model.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueBusinessObject2Model.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueBusinessObject2Model.remove({
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
