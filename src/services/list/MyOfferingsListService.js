const MyOfferingsListModel = require('../../models/list/MyOfferingsListModel');

module.exports = {

   getList: (data) => MyOfferingsListModel.getList(data)
};