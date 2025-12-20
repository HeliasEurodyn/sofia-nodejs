const CountriesSelectorListModel = require('../../models/list/CountriesSelectorListModel');

module.exports = {

   getList: (data) => CountriesSelectorListModel.getList(data),
   getGfNameList: (data) => CountriesSelectorListModel.getGfNameList(data)
};