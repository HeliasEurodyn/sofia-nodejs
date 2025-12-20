const DataProvidedForLocalApiListModel = require('../../models/list/DataProvidedForLocalApiListModel');

module.exports = {

   getList: (data) => DataProvidedForLocalApiListModel.getList(data),
   getCategoryGroupingList: (data) => DataProvidedForLocalApiListModel.getCategoryGroupingList(data),
   getServiceGroupingList: (data) => DataProvidedForLocalApiListModel.getServiceGroupingList(data),
   getBusinessObjectGroupingList: (data) => DataProvidedForLocalApiListModel.getBusinessObjectGroupingList(data)
};