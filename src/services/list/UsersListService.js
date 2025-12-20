const UsersListModel = require('../../models/list/UsersListModel');

module.exports = {

   getList: (data) => UsersListModel.getList(data)
};