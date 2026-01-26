const ClusterModel = require('../../models/crud/ClusterModel');
const ClusterFormModel = require('../../models/form/ClusterFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ClusterModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ClusterModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ClusterModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return ClusterModel.remove({
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
