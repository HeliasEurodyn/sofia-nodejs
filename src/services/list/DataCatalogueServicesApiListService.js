const DataCatalogueServicesApiListModel = require('../../models/list/DataCatalogueServicesApiListModel');

module.exports = {

   getList: (data) => DataCatalogueServicesApiListModel.getList(data),
   getCategoryGroupList: (data) => DataCatalogueServicesApiListModel.getCategoryGroupList(data)
};