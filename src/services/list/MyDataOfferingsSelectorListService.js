const MyDataOfferingsSelectorListModel = require('../../models/list/MyDataOfferingsSelectorListModel');

module.exports = {

   getList: (data) => MyDataOfferingsSelectorListModel.getList(data),
   getSqlgf1List: (data) => MyDataOfferingsSelectorListModel.getSqlgf1List(data),
   getSqlgf2List: (data) => MyDataOfferingsSelectorListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => MyDataOfferingsSelectorListModel.getSqlgf3List(data),
   getSqlgf4List: (data) => MyDataOfferingsSelectorListModel.getSqlgf4List(data)
};