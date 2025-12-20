const DataCatalogueServicesListModel = require('../../models/list/DataCatalogueServicesListModel');

module.exports = {

   getList: (data) => DataCatalogueServicesListModel.getList(data),
   getSqlgf1List: (data) => DataCatalogueServicesListModel.getSqlgf1List(data)
};