const DataCatalogueBusinessObject2Model = require('../../models/crud/DataCatalogueBusinessObject2Model');
const CrossPlatformServiceFormModel = require('../../models/form/CrossPlatformServiceFormModel');

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

   const getwizardsById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return CrossPlatformServiceFormModel.getwizardsById({
         id,
         userId
      });
   };

   module.exports = {
      getById,
      getwizardsById,
      create,
      update,
      remove
   };
