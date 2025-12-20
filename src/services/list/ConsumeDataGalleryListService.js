const ConsumeDataGalleryListModel = require('../../models/list/ConsumeDataGalleryListModel');

module.exports = {

   getList: (data) => ConsumeDataGalleryListModel.getList(data),
   getLgProviderList: (data) => ConsumeDataGalleryListModel.getLgProviderList(data),
   getGfServiceOfferingTitleList: (data) => ConsumeDataGalleryListModel.getGfServiceOfferingTitleList(data),
   getGfTypeHtmlList: (data) => ConsumeDataGalleryListModel.getGfTypeHtmlList(data)
};