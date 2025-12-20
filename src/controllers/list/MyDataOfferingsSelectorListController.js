const asyncHandler = require('../../helpers/asyncHandler');
const MyDataOfferingsSelectorListService = require('../../services/list/MyDataOfferingsSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyDataOfferingsSelectorListService.getList(req.body);
      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await MyDataOfferingsSelectorListService.getSqlgf1List(req.body);
      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await MyDataOfferingsSelectorListService.getSqlgf2List(req.body);
      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await MyDataOfferingsSelectorListService.getSqlgf3List(req.body);
      res.json(results);
   }),

   getSqlgf4List: asyncHandler(async (req, res) => {
      const results = await MyDataOfferingsSelectorListService.getSqlgf4List(req.body);
      res.json(results);
   })

};