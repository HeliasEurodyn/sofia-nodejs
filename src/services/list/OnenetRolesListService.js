const OnenetRolesListModel = require('../../models/list/OnenetRolesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return OnenetRolesListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
