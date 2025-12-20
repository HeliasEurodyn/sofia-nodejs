const DataTransactionsPivotListModel = require('../../models/list/DataTransactionsPivotListModel');

module.exports = {

   getList: (data) => DataTransactionsPivotListModel.getList(data),
   getSqlgf1List: (data) => DataTransactionsPivotListModel.getSqlgf1List(data),
   getSqlgf2List: (data) => DataTransactionsPivotListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => DataTransactionsPivotListModel.getSqlgf3List(data),
   getGfNameList: (data) => DataTransactionsPivotListModel.getGfNameList(data),
   getGfUsernameList: (data) => DataTransactionsPivotListModel.getGfUsernameList(data)
};