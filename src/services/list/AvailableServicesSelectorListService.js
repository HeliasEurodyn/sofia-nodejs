const AvailableServicesSelectorListModel = require('../../models/list/AvailableServicesSelectorListModel');

module.exports = {

   getList: (data) => AvailableServicesSelectorListModel.getList(data),
   getSqlgf1List: (data) => AvailableServicesSelectorListModel.getSqlgf1List(data),
   getSqlgf2List: (data) => AvailableServicesSelectorListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => AvailableServicesSelectorListModel.getSqlgf3List(data),
   getSqlgf4List: (data) => AvailableServicesSelectorListModel.getSqlgf4List(data)
};