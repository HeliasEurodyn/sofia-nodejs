const UsersSelectorListModel = require('../../models/list/UsersSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UsersSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   const getGfNameList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UsersSelectorListModel.getGfNameList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getGfNameList
   };
