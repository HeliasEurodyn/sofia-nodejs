const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      relathionship_type: {
         type: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         propagation: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sort_order: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const relathionship_type_obj = data.relathionship_type_obj;
         await ModelHelper.insert(conn, 'relathionship_type', module.exports.tables['relathionship_type'], relathionship_type_obj);

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   update: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const relathionship_type_obj = data.relathionship_type_obj;
         await ModelHelper.update(conn, 'relathionship_type', module.exports.tables['relathionship_type'], relathionship_type_obj);

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   getById: async ({ id, userId }) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - relathionship_type - */

         const relathionship_typeFilters = [id
         ];
         const [relathionship_type_results] = await conn.execute(
         `SELECT type, propagation, sort_order
          FROM relathionship_type
         WHERE relathionship_type.type = ? `, relathionship_typeFilters );

         let relathionship_type = {};
         data.relathionship_type_obj = {};
         if (relathionship_type_results.length > 0)
         {
            relathionship_type = relathionship_type_results[0];
            data.relathionship_type_obj = relathionship_type;
         } else {
            return data;
         }

         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   delete: async ({ id, userId }) => {
      const conn = await pool.getConnection();
      const data = {};
      try {
         await conn.beginTransaction();

         /* SELECT KEYS FROM DATABASE */

         const relathionship_typeFilters = [id
         ];

         const [relathionship_type_results] = await conn.execute(
         `SELECT type
          FROM relathionship_type
         WHERE relathionship_type.type = ? `, relathionship_typeFilters );

         let relathionship_type = {};
         data.relathionship_type_obj = {};
         if (relathionship_type_results.length > 0)
         {
            relathionship_type = relathionship_type_results[0];
            data.relathionship_type_obj = relathionship_type;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const relathionship_type_obj = data.relathionship_type_obj;
         await conn.execute(
            `DELETE FROM relathionship_type WHERE type = :type`, relathionship_type_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}