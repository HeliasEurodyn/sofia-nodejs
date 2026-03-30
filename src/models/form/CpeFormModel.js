const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

      tables : {
      cpe: {
         cpeName: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         vendor: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         product: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         version: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         versionSortable: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lastModified: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      cve: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sourceIdentifier: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         vulnStatus: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         published: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lastModified: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description_en: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cvss_version: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cvss_baseScore: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cvss_exploitabilityScore: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cvss_impactScore: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cpeName: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      }
   },

}