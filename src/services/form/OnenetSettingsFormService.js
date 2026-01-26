const OnenetSettingsModel = require('../../models/crud/OnenetSettingsModel');
const OnenetSettingsFormModel = require('../../models/form/OnenetSettingsFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return OnenetSettingsModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return OnenetSettingsModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return OnenetSettingsModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return OnenetSettingsModel.remove({
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
