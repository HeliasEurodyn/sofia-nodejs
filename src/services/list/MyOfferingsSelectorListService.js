const MyOfferingsSelectorListModel = require('../../models/list/MyOfferingsSelectorListModel');

module.exports = {

   getList: (data) => MyOfferingsSelectorListModel.getList(data),
   getOwnerLeftFilterList: (data) => MyOfferingsSelectorListModel.getOwnerLeftFilterList(data),
   getGfDataSharingMethodList: (data) => MyOfferingsSelectorListModel.getGfDataSharingMethodList(data)
};