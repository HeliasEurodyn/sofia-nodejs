const MyOfferedServicesForLocalApiListModel = require('../../models/list/MyOfferedServicesForLocalApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesForLocalApiListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
