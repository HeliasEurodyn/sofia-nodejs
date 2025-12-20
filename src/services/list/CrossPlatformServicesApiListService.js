const CrossPlatformServicesApiListModel = require('../../models/list/CrossPlatformServicesApiListModel');

module.exports = {

   getList: (data) => CrossPlatformServicesApiListModel.getList(data),
   getCategoryGroupList: (data) => CrossPlatformServicesApiListModel.getCategoryGroupList(data),
   getServiceGroupList: (data) => CrossPlatformServicesApiListModel.getServiceGroupList(data)
};