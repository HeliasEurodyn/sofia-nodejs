const UsersSysadminListModel = require('../../models/list/UsersSysadminListModel');

module.exports = {

   getList: (data) => UsersSysadminListModel.getList(data),
   getGfNameList: (data) => UsersSysadminListModel.getGfNameList(data)
};