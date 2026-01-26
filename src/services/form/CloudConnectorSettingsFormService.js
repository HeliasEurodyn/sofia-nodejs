const CloudConnectorSettingsModel = require('../../models/crud/CloudConnectorSettingsModel');
const CloudConnectorSettingsFormModel = require('../../models/form/CloudConnectorSettingsFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return CloudConnectorSettingsModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CloudConnectorSettingsModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CloudConnectorSettingsModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return CloudConnectorSettingsModel.remove({
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
