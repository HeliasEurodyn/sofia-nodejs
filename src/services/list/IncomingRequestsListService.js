const IncomingRequestsListModel = require('../../models/list/IncomingRequestsListModel');

module.exports = {

   getList: (data) => IncomingRequestsListModel.getList(data)
};