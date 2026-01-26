const OnenetRoleModel = require('../../models/crud/OnenetRoleModel');
const OnenetRoleFormModel = require('../../models/form/OnenetRoleFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return OnenetRoleModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return OnenetRoleModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return OnenetRoleModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return OnenetRoleModel.remove({
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
