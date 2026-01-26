const TransuctionsPivotListModel = require('../../models/list/TransuctionsPivotListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return TransuctionsPivotListModel.getList({
         filters: data,
         userId
      });
   };


   const getGfProviderList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return TransuctionsPivotListModel.getGfProviderList({
         ...data,
         userId
      });
   };


   const getGfOfferingTitleList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return TransuctionsPivotListModel.getGfOfferingTitleList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getGfProviderList,
      getGfOfferingTitleList
   };
