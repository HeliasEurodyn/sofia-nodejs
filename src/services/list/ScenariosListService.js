const ScenariosListModel = require('../../models/list/ScenariosListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ScenariosListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
