const BusinessObjectApiListModel = require('../../models/list/BusinessObjectApiListModel');

module.exports = {

   getList: (data) => BusinessObjectApiListModel.getList(data),
   getCategoryGroupingList: (data) => BusinessObjectApiListModel.getCategoryGroupingList(data),
   getServiceGroupingList: (data) => BusinessObjectApiListModel.getServiceGroupingList(data)
};