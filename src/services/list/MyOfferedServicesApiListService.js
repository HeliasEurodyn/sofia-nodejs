const MyOfferedServicesApiListModel = require('../../models/list/MyOfferedServicesApiListModel');

module.exports = {

   getList: (data) => MyOfferedServicesApiListModel.getList(data),
   getCategoryGroupList: (data) => MyOfferedServicesApiListModel.getCategoryGroupList(data),
   getServiceGroupList: (data) => MyOfferedServicesApiListModel.getServiceGroupList(data),
   getBusinessObjectGroupList: (data) => MyOfferedServicesApiListModel.getBusinessObjectGroupList(data),
   getUsersGroupList: (data) => MyOfferedServicesApiListModel.getUsersGroupList(data)
};