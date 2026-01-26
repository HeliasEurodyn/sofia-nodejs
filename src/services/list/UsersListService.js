const UsersListModel = require('../../models/list/UsersListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UsersListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
