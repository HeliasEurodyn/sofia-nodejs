const RequestsAdminListModel = require('../../models/list/RequestsAdminListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsAdminListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf11List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsAdminListModel.getSqlgf11List({
         ...data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsAdminListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsAdminListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsAdminListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf11List,
      getSqlgf1List,
      getSqlgf2List,
      getSqlgf3List
   };
