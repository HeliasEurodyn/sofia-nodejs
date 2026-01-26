const MyOfferingsCopyGalleryListModel = require('../../models/list/MyOfferingsCopyGalleryListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferingsCopyGalleryListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferingsCopyGalleryListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferingsCopyGalleryListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getGfTitleList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferingsCopyGalleryListModel.getGfTitleList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf1List,
      getSqlgf2List,
      getGfTitleList
   };
