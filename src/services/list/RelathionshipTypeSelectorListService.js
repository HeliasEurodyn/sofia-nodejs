const RelathionshipTypeSelectorListModel = require('../../models/list/RelathionshipTypeSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RelathionshipTypeSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
