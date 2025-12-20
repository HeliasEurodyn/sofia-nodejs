const UsersApiListModel = require('../../models/list/UsersApiListModel');

module.exports = {

   getList: (data) => UsersApiListModel.getList(data),
   getCompanyNameGroupingList: (data) => UsersApiListModel.getCompanyNameGroupingList(data)
};