const DataCatalogueCategoryModel = require('../../models/crud/DataCatalogueCategoryModel');
const Sample1FormModel = require('../../models/form/Sample1FormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueCategoryModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueCategoryModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueCategoryModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueCategoryModel.remove({
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
