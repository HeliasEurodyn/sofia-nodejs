const DataConsumedForLocalApiListModel = require('../../models/list/DataConsumedForLocalApiListModel');

module.exports = {

   getList: (data) => DataConsumedForLocalApiListModel.getList(data),
   getCategoryGroupingList: (data) => DataConsumedForLocalApiListModel.getCategoryGroupingList(data),
   getServiceGroupingList: (data) => DataConsumedForLocalApiListModel.getServiceGroupingList(data),
   getBusinessObjectGroupingList: (data) => DataConsumedForLocalApiListModel.getBusinessObjectGroupingList(data)
};