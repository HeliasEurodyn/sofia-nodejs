const RelathionshipTypeModel = require('../../models/crud/RelathionshipTypeModel');
const RelathionshipTypeFormModel = require('../../models/form/RelathionshipTypeFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return RelathionshipTypeModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RelathionshipTypeModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RelathionshipTypeModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return RelathionshipTypeModel.remove({
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
