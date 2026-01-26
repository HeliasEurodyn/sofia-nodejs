const DataCreationServiceOfferingModel = require('../../models/crud/DataCreationServiceOfferingModel');
const DataCreationServiceOfferingFormModel = require('../../models/form/DataCreationServiceOfferingFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCreationServiceOfferingModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCreationServiceOfferingModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCreationServiceOfferingModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return DataCreationServiceOfferingModel.remove({
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
