const FindOfferingsGalleryListModel = require('../../models/list/FindOfferingsGalleryListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return FindOfferingsGalleryListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return FindOfferingsGalleryListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return FindOfferingsGalleryListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getGfTitleList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return FindOfferingsGalleryListModel.getGfTitleList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf3List,
      getSqlgf2List,
      getGfTitleList
   };
