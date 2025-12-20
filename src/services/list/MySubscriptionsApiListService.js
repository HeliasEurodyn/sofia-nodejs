const MySubscriptionsApiListModel = require('../../models/list/MySubscriptionsApiListModel');

module.exports = {

   getList: (data) => MySubscriptionsApiListModel.getList(data),
   getCategoryGroupingList: (data) => MySubscriptionsApiListModel.getCategoryGroupingList(data),
   getServiceGroupingList: (data) => MySubscriptionsApiListModel.getServiceGroupingList(data),
   getBusinessObjectGroupingList: (data) => MySubscriptionsApiListModel.getBusinessObjectGroupingList(data),
   getUsersGroupingList: (data) => MySubscriptionsApiListModel.getUsersGroupingList(data)
};