const ServiceDashboardListModel = require('../../models/list/ServiceDashboardListModel');

module.exports = {

   getList: (data) => ServiceDashboardListModel.getList(data)
};