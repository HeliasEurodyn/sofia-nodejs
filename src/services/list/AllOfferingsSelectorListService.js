const AllOfferingsSelectorListModel = require('../../models/list/AllOfferingsSelectorListModel');

module.exports = {

   getList: (data) => AllOfferingsSelectorListModel.getList(data),
   getOwnerLeftFilterList: (data) => AllOfferingsSelectorListModel.getOwnerLeftFilterList(data),
   getGfDataSharingMethodList: (data) => AllOfferingsSelectorListModel.getGfDataSharingMethodList(data)
};