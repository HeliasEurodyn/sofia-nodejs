const CrossPlatformServicesApiListModel = require('../../models/list/CrossPlatformServicesApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CrossPlatformServicesApiListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CrossPlatformServicesApiListModel.getCategoryGroupList({
         ...data,
         userId
      });
   };


   const getServiceGroupList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CrossPlatformServicesApiListModel.getServiceGroupList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getCategoryGroupList,
      getServiceGroupList
   };
