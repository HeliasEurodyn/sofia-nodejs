const CrossPlatformServicesForServiceEditorAndAdminListModel = require('../../models/list/CrossPlatformServicesForServiceEditorAndAdminListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CrossPlatformServicesForServiceEditorAndAdminListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CrossPlatformServicesForServiceEditorAndAdminListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CrossPlatformServicesForServiceEditorAndAdminListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf2List,
      getSqlgf3List
   };
