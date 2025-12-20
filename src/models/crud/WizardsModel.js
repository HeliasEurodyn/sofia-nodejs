const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      wizards: {
         icon: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   getById: async (id) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - wizards - */

         const wizardsFilters = {
            wizards_obj_id: id
         };
         const [wizards_results] = await conn.query(
         `SELECT icon, id, description, title, name
          FROM wizards
         WHERE wizards.id = :wizards_obj_id;`, wizardsFilters );

         let wizards = {};
         data.wizards_obj = {};
         if (wizards_results.length > 0)
         {
            wizards = wizards_results[0];
            data.wizards_obj = wizards;
         }

         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   delete: async (id) => {
      const conn = await pool.getConnection();
      const data = {};
      try {
         await conn.beginTransaction();

         /* SELECT KEYS FROM DATABASE */

         const wizardsFilters = {
            wizards_obj_id: id
         };

         const [wizards_results] = await conn.query(
         `SELECT id
          FROM wizards
         WHERE wizards.id = :wizards_obj_id;`, wizardsFilters );

         let wizards = {};
         data.wizards_obj = {};
         if (wizards_results.length > 0)
         {
            wizards = wizards_results[0];
            data.wizards_obj = wizards;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const wizards_obj = data.wizards_obj;
         await conn.query(
            `DELETE FROM wizards WHERE id = :id`, wizards_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}