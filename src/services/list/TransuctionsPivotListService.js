const TransuctionsPivotListModel = require('../../models/list/TransuctionsPivotListModel');

module.exports = {

   getList: (data) => TransuctionsPivotListModel.getList(data),
   getGfProviderList: (data) => TransuctionsPivotListModel.getGfProviderList(data),
   getGfOfferingTitleList: (data) => TransuctionsPivotListModel.getGfOfferingTitleList(data)
};