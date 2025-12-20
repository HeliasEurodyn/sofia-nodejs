const ConsumeDataListModel = require('../../models/list/ConsumeDataListModel');

module.exports = {

   getList: (data) => ConsumeDataListModel.getList(data),
   getSqlgf1List: (data) => ConsumeDataListModel.getSqlgf1List(data),
   getSqlgf2List: (data) => ConsumeDataListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => ConsumeDataListModel.getSqlgf3List(data)
};