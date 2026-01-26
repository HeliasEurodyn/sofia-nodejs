const asyncHandler = require('../../helpers/asyncHandler');
const DataOfferingsSysAdminListService = require('../../services/list/DataOfferingsSysAdminListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysAdminListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf1List: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysAdminListService.getSqlgf1List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysAdminListService.getSqlgf2List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysAdminListService.getSqlgf3List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf4List: asyncHandler(async (req, res) => {
      const results = await DataOfferingsSysAdminListService.getSqlgf4List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};