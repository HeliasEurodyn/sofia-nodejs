const UsersSelectorListModel = require('../../models/list/UsersSelectorListModel');

module.exports = {

   getList: (data) => UsersSelectorListModel.getList(data),
   getGfNameList: (data) => UsersSelectorListModel.getGfNameList(data)
};