const CypherQueryTemplateSelectorListModel = require('../../models/list/CypherQueryTemplateSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CypherQueryTemplateSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
