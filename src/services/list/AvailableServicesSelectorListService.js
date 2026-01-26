const AvailableServicesSelectorListModel = require('../../models/list/AvailableServicesSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return AvailableServicesSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return AvailableServicesSelectorListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return AvailableServicesSelectorListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return AvailableServicesSelectorListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   const getSqlgf4List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return AvailableServicesSelectorListModel.getSqlgf4List({
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
