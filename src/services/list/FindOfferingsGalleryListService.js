const FindOfferingsGalleryListModel = require('../../models/list/FindOfferingsGalleryListModel');

module.exports = {

   getList: (data) => FindOfferingsGalleryListModel.getList(data),
   getSqlgf3List: (data) => FindOfferingsGalleryListModel.getSqlgf3List(data),
   getSqlgf2List: (data) => FindOfferingsGalleryListModel.getSqlgf2List(data),
   getGfTitleList: (data) => FindOfferingsGalleryListModel.getGfTitleList(data)
};