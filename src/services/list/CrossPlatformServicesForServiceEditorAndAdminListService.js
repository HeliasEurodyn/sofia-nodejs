const CrossPlatformServicesForServiceEditorAndAdminListModel = require('../../models/list/CrossPlatformServicesForServiceEditorAndAdminListModel');

module.exports = {

   getList: (data) => CrossPlatformServicesForServiceEditorAndAdminListModel.getList(data),
   getSqlgf2List: (data) => CrossPlatformServicesForServiceEditorAndAdminListModel.getSqlgf2List(data),
   getSqlgf3List: (data) => CrossPlatformServicesForServiceEditorAndAdminListModel.getSqlgf3List(data)
};