const DataProvidedDashboardListModel = require('../../models/list/DataProvidedDashboardListModel');

module.exports = {

   getList: (data) => DataProvidedDashboardListModel.getList(data),
   getSqlgf1List: (data) => DataProvidedDashboardListModel.getSqlgf1List(data),
   getSqlgf2List: (data) => DataProvidedDashboardListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => DataProvidedDashboardListModel.getSqlgf3List(data)
};