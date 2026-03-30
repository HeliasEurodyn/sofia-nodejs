const RelathionshipTypeListModel = require('../../models/list/RelathionshipTypeListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RelathionshipTypeListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
