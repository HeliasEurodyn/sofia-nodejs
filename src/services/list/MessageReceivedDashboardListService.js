const MessageReceivedDashboardListModel = require('../../models/list/MessageReceivedDashboardListModel');

module.exports = {

   getList: (data) => MessageReceivedDashboardListModel.getList(data)
};