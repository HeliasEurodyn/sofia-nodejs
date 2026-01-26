const asyncHandler = require('../../helpers/asyncHandler');
const CrossPlatformServicesForServiceEditorAndAdminListService = require('../../services/list/CrossPlatformServicesForServiceEditorAndAdminListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServicesForServiceEditorAndAdminListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf2List: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServicesForServiceEditorAndAdminListService.getSqlgf2List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getSqlgf3List: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServicesForServiceEditorAndAdminListService.getSqlgf3List({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};