const RequestsListModel = require('../../models/list/RequestsListModel');

module.exports = {

   getList: (data) => RequestsListModel.getList(data),
   getCategoryGroupingList: (data) => RequestsListModel.getCategoryGroupingList(data),
   getServiceGroupingList: (data) => RequestsListModel.getServiceGroupingList(data),
   getBusinessObjectGroupingList: (data) => RequestsListModel.getBusinessObjectGroupingList(data),
   getUsersGroupingList: (data) => RequestsListModel.getUsersGroupingList(data)
};