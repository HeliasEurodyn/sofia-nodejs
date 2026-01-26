const UserModel = require('../../models/crud/UserModel');
const UserWeFormingAdminFormModel = require('../../models/form/UserWeFormingAdminFormModel');

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

      return UserWeFormingAdminFormModel.getcountryById({
         id,
         userId
      });
   };
   const getcloud_connector_settingsById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return UserWeFormingAdminFormModel.getcloud_connector_settingsById({
         id,
         userId
      });
   };

   module.exports = {
      getById,
      getcountryById,getcloud_connector_settingsById,
      create,
      update,
      remove
   };
