const ServiceCatalogueListModel = require('../../models/list/ServiceCatalogueListModel');

module.exports = {

   getList: (data) => ServiceCatalogueListModel.getList(data),
   getSqlgf2List: (data) => ServiceCatalogueListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => ServiceCatalogueListModel.getSqlgf3List(data)
};