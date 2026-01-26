const MySubscriptionsListModel = require('../../models/list/MySubscriptionsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsListModel.getCategoryGroupingList({
         ...data,
         userId
      });
   };


   const getServiceGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsListModel.getServiceGroupingList({
         ...data,
         userId
      });
   };


   const getBusinessObjectGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsListModel.getBusinessObjectGroupingList({
         ...data,
         userId
      });
   };


   const getUsersGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsListModel.getUsersGroupingList({
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
