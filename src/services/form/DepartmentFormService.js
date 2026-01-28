const DepartmentModel = require('../../models/crud/DepartmentModel');
const DepartmentFormModel = require('../../models/form/DepartmentFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DepartmentModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DepartmentModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DepartmentModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DepartmentModel.remove({
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
