const MarketsListModel = require('../../models/list/MarketsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MarketsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
