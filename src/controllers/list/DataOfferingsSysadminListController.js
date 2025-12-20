const asyncHandler = require('../../helpers/asyncHandler');
const DataOfferingsSysadminListService = require('../../services/list/DataOfferingsSysadminListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysadminListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysadminListService.getSqlgf1List(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysadminListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysadminListService.getSqlgf3List(req.body);
      res.json(results);
   }),

   getSqlgf4List: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysadminListService.getSqlgf4List(req.body);
      res.json(results);
   })

};