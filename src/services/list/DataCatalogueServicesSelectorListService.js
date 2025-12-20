const DataCatalogueServicesSelectorListModel = require('../../models/list/DataCatalogueServicesSelectorListModel');

module.exports = {

   getList: (data) => DataCatalogueServicesSelectorListModel.getList(data),
   getSqlgf1List: (data) => DataCatalogueServicesSelectorListModel.getSqlgf1List(data)
};