const TestListModel = require('../../models/list/TestListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return TestListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
