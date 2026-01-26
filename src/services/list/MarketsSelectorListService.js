const MarketsSelectorListModel = require('../../models/list/MarketsSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MarketsSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
