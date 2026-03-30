const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

      tables : {
      scenario: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sort_order: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      scenario_query: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         scenario_query: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sort_order: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         scenario_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      }
   },

}