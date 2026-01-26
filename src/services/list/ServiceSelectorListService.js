const ServiceSelectorListModel = require('../../models/list/ServiceSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
