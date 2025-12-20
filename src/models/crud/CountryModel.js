const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      country: {
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cluster_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      cluster: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const country_obj = data.country_obj;
         country_obj.id = uuid();
         await ModelHelper.insert(conn, 'country', module.exports.tables['country'], country_obj);

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   update: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const country_obj = data.country_obj;
         await ModelHelper.update(conn, 'country', module.exports.tables['country'], country_obj);

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   getById: async (id) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - country - */

         const countryFilters = {
            country_obj_id: id
         };
         const [country_results] = await conn.query(
         `SELECT code, id, created_by, created_on, modified_by, modified_on, name, cluster_id
          FROM country
         WHERE country.id = :country_obj_id;`, countryFilters );

         let country = {};
         data.country_obj = {};
         if (country_results.length > 0)
         {
            country = country_results[0];
            data.country_obj = country;
         }

         /* SELECTION QUERY - cluster - */

         const clusterFilters = {
            cluster_obj_id: country?.cluster_id
         };
         const [cluster_results] = await conn.query(
         `SELECT id, created_by, created_on, modified_by, modified_on, name, code
          FROM cluster
         WHERE cluster.id = :cluster_obj_id;`, clusterFilters );

         let cluster = {};
         data.country_obj.cluster_obj = {};
         if (cluster_results.length > 0)
         {
            cluster = cluster_results[0];
            data.country_obj.cluster_obj = cluster;
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

         const countryFilters = {
            country_obj_id: id
         };

         const [country_results] = await conn.query(
         `SELECT id, cluster_id
          FROM country
         WHERE country.id = :country_obj_id;`, countryFilters );

         let country = {};
         data.country_obj = {};
         if (country_results.length > 0)
         {
            country = country_results[0];
            data.country_obj = country;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const country_obj = data.country_obj;
         await conn.query(
            `DELETE FROM country WHERE id = :id`, country_obj );
         country_obj.id = country_result.insertId;

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}