const MySubscriptionsListModel = require('../../models/list/MySubscriptionsListModel');

module.exports = {

   getList: (data) => MySubscriptionsListModel.getList(data),
   getCategoryGroupingList: (data) => MySubscriptionsListModel.getCategoryGroupingList(data),
   getServiceGroupingList: (data) => MySubscriptionsListModel.getServiceGroupingList(data),
   getBusinessObjectGroupingList: (data) => MySubscriptionsListModel.getBusinessObjectGroupingList(data),
   getUsersGroupingList: (data) => MySubscriptionsListModel.getUsersGroupingList(data)
};