const DataConsumedDashboardListModel = require('../../models/list/DataConsumedDashboardListModel');

module.exports = {

   getList: (data) => DataConsumedDashboardListModel.getList(data),
   getSqlgf1List: (data) => DataConsumedDashboardListModel.getSqlgf1List(data),
   getSqlgf2List: (data) => DataConsumedDashboardListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => DataConsumedDashboardListModel.getSqlgf3List(data)
};