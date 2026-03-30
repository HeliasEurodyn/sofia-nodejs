const CpeModel = require('../../models/crud/CpeModel');
const CpeFormModel = require('../../models/form/CpeFormModel');
const CpeElasticModel = require('../../models/cpeElasticModel');
const cveElasticModel = require('../../models/cveElasticModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;
      const data = await CpeElasticModel.getById(id);
      const cveIds = await cveElasticModel.getCvesByCpe(id);
      const cves = [];
      for(const cveId of cveIds) {
         const cve = await cveElasticModel.getCveById(cveId);

         // const responseCve = {
         //    id: cve.id,
         //    baseScore: cve.cvss_baseScore,
         //    impactScore: cve.cvss_impactScore,
         //    exploitabilityScore: cve.cvss_exploitabilityScore
         // }

         cves.push(cve);
      }

      data.cve_obj = cves;

      return { 
         cpe_obj: data
      };
      /*return CpeModel.getById({*/
      /*   id,*/
      /*   userId*/
      /*});*/
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CpeModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CpeModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return CpeModel.remove({
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
