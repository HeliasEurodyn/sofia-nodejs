const CpesSelectorListModel = require('../../models/list/CpesSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CpesSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
