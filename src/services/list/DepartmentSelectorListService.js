const DepartmentSelectorListModel = require('../../models/list/DepartmentSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DepartmentSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
