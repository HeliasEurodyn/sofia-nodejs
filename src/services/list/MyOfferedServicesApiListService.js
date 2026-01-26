const MyOfferedServicesApiListModel = require('../../models/list/MyOfferedServicesApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesApiListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesApiListModel.getCategoryGroupList({
         ...data,
         userId
      });
   };


   const getServiceGroupList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesApiListModel.getServiceGroupList({
         ...data,
         userId
      });
   };


   const getBusinessObjectGroupList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesApiListModel.getBusinessObjectGroupList({
         ...data,
         userId
      });
   };


   const getUsersGroupList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesApiListModel.getUsersGroupList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getCategoryGroupList,
      getServiceGroupList,
      getBusinessObjectGroupList,
      getUsersGroupList
   };
