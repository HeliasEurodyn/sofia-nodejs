const DataCatalogueCategoryApiListModel = require('../../models/list/DataCatalogueCategoryApiListModel');

module.exports = {

   getList: (data) => DataCatalogueCategoryApiListModel.getList(data)
};