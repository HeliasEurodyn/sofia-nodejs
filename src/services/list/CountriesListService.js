const CountriesListModel = require('../../models/list/CountriesListModel');

module.exports = {

   getList: (data) => CountriesListModel.getList(data),
   getGfNameList: (data) => CountriesListModel.getGfNameList(data)
};