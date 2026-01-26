const UserModel = require('../../models/crud/UserModel');
const UserWeFormingFormModel = require('../../models/form/UserWeFormingFormModel');

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

   const getcountryById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return UserWeFormingFormModel.getcountryById({
         id,
         userId
      });
   };

   module.exports = {
      getById,
      getcountryById,
      create,
      update,
      remove
   };
