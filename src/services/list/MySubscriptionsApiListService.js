const MySubscriptionsApiListModel = require('../../models/list/MySubscriptionsApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsApiListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsApiListModel.getCategoryGroupingList({
         ...data,
         userId
      });
   };


   const getServiceGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsApiListModel.getServiceGroupingList({
         ...data,
         userId
      });
   };


   const getBusinessObjectGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsApiListModel.getBusinessObjectGroupingList({
         ...data,
         userId
      });
   };


   const getUsersGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsApiListModel.getUsersGroupingList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getCategoryGroupingList,
      getServiceGroupingList,
      getBusinessObjectGroupingList,
      getUsersGroupingList
   };
