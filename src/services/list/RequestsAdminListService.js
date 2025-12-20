const RequestsAdminListModel = require('../../models/list/RequestsAdminListModel');

module.exports = {

   getList: (data) => RequestsAdminListModel.getList(data),
   getSqlgf11List: (data) => RequestsAdminListModel.getSqlgf11List(data),
   getSqlgf1List: (data) => RequestsAdminListModel.getSqlgf1List(data),
   getSqlgf2List: (data) => RequestsAdminListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => RequestsAdminListModel.getSqlgf3List(data)
};