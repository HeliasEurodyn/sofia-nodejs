const MyOfferedServicesListModel = require('../../models/list/MyOfferedServicesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   const getSqlgf4List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferedServicesListModel.getSqlgf4List({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf1List,
      getSqlgf2List,
      getSqlgf3List,
      getSqlgf4List
   };
