const CountryModel = require('../../models/crud/CountryModel');
const CountryFormModel = require('../../models/form/CountryFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return CountryModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CountryModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CountryModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return CountryModel.remove({
         id,
         userId
      });
   };

   const getclusterById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return CountryFormModel.getclusterById({
         id,
         userId
      });
   };

   module.exports = {
      getById,
      getclusterById,
      create,
      update,
      remove
   };
