const BusinessObjectSelectorListModel = require('../../models/list/BusinessObjectSelectorListModel');

module.exports = {

   getList: (data) => BusinessObjectSelectorListModel.getList(data),
   getSqlgf2List: (data) => BusinessObjectSelectorListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => BusinessObjectSelectorListModel.getSqlgf3List(data)
};