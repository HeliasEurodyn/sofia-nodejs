const ServiceListModel = require('../../models/list/ServiceListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
