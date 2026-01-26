const ConsumeDataGalleryListModel = require('../../models/list/ConsumeDataGalleryListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ConsumeDataGalleryListModel.getList({
         filters: data,
         userId
      });
   };


   const getLgProviderList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ConsumeDataGalleryListModel.getLgProviderList({
         ...data,
         userId
      });
   };


   const getGfServiceOfferingTitleList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ConsumeDataGalleryListModel.getGfServiceOfferingTitleList({
         ...data,
         userId
      });
   };


   const getGfTypeHtmlList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ConsumeDataGalleryListModel.getGfTypeHtmlList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getLgProviderList,
      getGfServiceOfferingTitleList,
      getGfTypeHtmlList
   };
