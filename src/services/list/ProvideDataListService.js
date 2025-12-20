const ProvideDataListModel = require('../../models/list/ProvideDataListModel');

module.exports = {

   getList: (data) => ProvideDataListModel.getList(data),
   getCategoryGroupingList: (data) => ProvideDataListModel.getCategoryGroupingList(data),
   getServiceGroupingList: (data) => ProvideDataListModel.getServiceGroupingList(data),
   getBusinessObjectGroupingList: (data) => ProvideDataListModel.getBusinessObjectGroupingList(data)
};