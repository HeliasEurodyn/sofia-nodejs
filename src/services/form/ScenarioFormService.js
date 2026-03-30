const ScenarioModel = require('../../models/crud/ScenarioModel');
const ScenarioFormModel = require('../../models/form/ScenarioFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ScenarioModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ScenarioModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ScenarioModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ScenarioModel.remove({
         id,
         userId
      });
   };


   module.exports = {
      getById,
      
      create,
      update,
      remove
   };
