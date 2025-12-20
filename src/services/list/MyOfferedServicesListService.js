const MyOfferedServicesListModel = require('../../models/list/MyOfferedServicesListModel');

module.exports = {

   getList: (data) => MyOfferedServicesListModel.getList(data),
   getSqlgf1List: (data) => MyOfferedServicesListModel.getSqlgf1List(data),
   getSqlgf2List: (data) => MyOfferedServicesListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => MyOfferedServicesListModel.getSqlgf3List(data),
   getSqlgf4List: (data) => MyOfferedServicesListModel.getSqlgf4List(data)
};