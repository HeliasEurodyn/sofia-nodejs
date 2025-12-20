const MessagesReceivedListModel = require('../../models/list/MessagesReceivedListModel');

module.exports = {

   getList: (data) => MessagesReceivedListModel.getList(data)
};