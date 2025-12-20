const ServiceListModel = require('../../models/list/ServiceListModel');

module.exports = {

   getList: (data) => ServiceListModel.getList(data)
};