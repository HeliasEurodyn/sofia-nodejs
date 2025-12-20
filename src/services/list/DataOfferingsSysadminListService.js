const DataOfferingsSysadminListModel = require('../../models/list/DataOfferingsSysadminListModel');

module.exports = {

   getList: (data) => DataOfferingsSysadminListModel.getList(data),
   getSqlgf1List: (data) => DataOfferingsSysadminListModel.getSqlgf1List(data),
   getSqlgf2List: (data) => DataOfferingsSysadminListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => DataOfferingsSysadminListModel.getSqlgf3List(data),
   getSqlgf4List: (data) => DataOfferingsSysadminListModel.getSqlgf4List(data)
};