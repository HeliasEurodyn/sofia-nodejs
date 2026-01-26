const UsersApiListModel = require('../../models/list/UsersApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UsersApiListModel.getList({
         filters: data,
         userId
      });
   };


   const getCompanyNameGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return UsersApiListModel.getCompanyNameGroupingList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getCompanyNameGroupingList
   };
