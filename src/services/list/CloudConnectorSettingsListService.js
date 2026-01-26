const CloudConnectorSettingsListModel = require('../../models/list/CloudConnectorSettingsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CloudConnectorSettingsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
