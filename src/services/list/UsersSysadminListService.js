const UsersSysadminListModel = require('../../models/list/UsersSysadminListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UsersSysadminListModel.getList({
         filters: data,
         userId
      });
   };


   const getGfNameList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UsersSysadminListModel.getGfNameList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getGfNameList
   };
