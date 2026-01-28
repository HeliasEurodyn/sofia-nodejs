const DepartmentListModel = require('../../models/list/DepartmentListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DepartmentListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
