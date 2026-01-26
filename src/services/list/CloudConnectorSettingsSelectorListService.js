const CloudConnectorSettingsSelectorListModel = require('../../models/list/CloudConnectorSettingsSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CloudConnectorSettingsSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
