const OnenetRolesSelectorListModel = require('../../models/list/OnenetRolesSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return OnenetRolesSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
