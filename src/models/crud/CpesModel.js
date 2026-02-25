const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      cpes: {
         vendor: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cpe: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         product: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         version: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   getById: async ({ id, userId }) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - cpes - */

         const cpesFilters = [id
         ];
         const [cpes_results] = await conn.execute(
         `SELECT vendor, cpe, product, version
          FROM  ( SELECT  '   ' AS cpe, '   ' AS vendor,  '   ' AS product,  '   ' AS version ) cpes
         WHERE cpes.cpe = ? `, cpesFilters );

         let cpes = {};
         data.cpes_obj = {};
         if (cpes_results.length > 0)
         {
            cpes = cpes_results[0];
            data.cpes_obj = cpes;
         } else {
            return data;
         }

         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}