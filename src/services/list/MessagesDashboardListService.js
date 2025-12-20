const MessagesDashboardListModel = require('../../models/list/MessagesDashboardListModel');

module.exports = {

   getList: (data) => MessagesDashboardListModel.getList(data)
};