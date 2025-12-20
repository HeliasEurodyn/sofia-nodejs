const CompaniesListModel = require('../../models/list/CompaniesListModel');

module.exports = {

   getList: (data) => CompaniesListModel.getList(data)
};