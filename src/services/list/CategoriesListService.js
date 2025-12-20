const CategoriesListModel = require('../../models/list/CategoriesListModel');

module.exports = {

   getList: (data) => CategoriesListModel.getList(data)
};