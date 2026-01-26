const BusinessTagSelectorListModel = require('../../models/list/BusinessTagSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessTagSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
