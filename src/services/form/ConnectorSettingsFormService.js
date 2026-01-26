const UserModel = require('../../models/crud/UserModel');
const ConnectorSettingsFormModel = require('../../models/form/ConnectorSettingsFormModel');

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

   const getcloud_connector_settingsById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ConnectorSettingsFormModel.getcloud_connector_settingsById({
         id,
         userId
      });
   };

   module.exports = {
      getById,
      getcloud_connector_settingsById,
      create,
      update,
      remove
   };
