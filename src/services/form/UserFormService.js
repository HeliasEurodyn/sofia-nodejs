const UserModel = require('../../models/crud/UserModel');
const UserFormModel = require('../../models/form/UserFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return UserModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UserModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UserModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return UserModel.remove({
         id,
         userId
      });
   };

   const getonenet_roleById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return UserFormModel.getonenet_roleById({
         id,
         userId
      });
   };
   const getcountryById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return UserFormModel.getcountryById({
         id,
         userId
      });
   };

   module.exports = {
      getById,
      getonenet_roleById,getcountryById,
      create,
      update,
      remove
   };
