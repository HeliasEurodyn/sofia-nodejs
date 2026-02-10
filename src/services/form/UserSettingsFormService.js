const UserSettingsModel = require('../../models/crud/UserSettingsModel');
const UserSettingsFormModel = require('../../models/form/UserSettingsFormModel');

   const upsert  = async  ({ data, ctx }) => {
      const existing = await getById({
         id: data.user_settings_obj.id,
         ctx
      });

      if (existing.user_settings_obj.id == undefined) {
         return create({
         data,
         ctx
         });
      }

      return update({
         data,
         ctx
      });
   };

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return UserSettingsModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UserSettingsModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UserSettingsModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return UserSettingsModel.remove({
         id,
         userId
      });
   };


   module.exports = {
      upsert,
      getById,
      
      create,
      update,
      remove
   };
