const ServiceDashboardListModel = require('../../models/list/ServiceDashboardListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceDashboardListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
