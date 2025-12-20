const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      cluster: {
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const cluster_obj = data.cluster_obj;
         cluster_obj.id = uuid();
         await ModelHelper.insert(conn, 'cluster', module.exports.tables['cluster'], cluster_obj);

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

         const cluster_obj = data.cluster_obj;
         await ModelHelper.update(conn, 'cluster', module.exports.tables['cluster'], cluster_obj);

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

         /* SELECTION QUERY - cluster - */

         const clusterFilters = {
            cluster_obj_id: id
         };
         const [cluster_results] = await conn.query(
         `SELECT code, id, created_by, created_on, modified_by, modified_on, name
          FROM cluster
         WHERE cluster.id = :cluster_obj_id;`, clusterFilters );

         let cluster = {};
         data.cluster_obj = {};
         if (cluster_results.length > 0)
         {
            cluster = cluster_results[0];
            data.cluster_obj = cluster;
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

         const clusterFilters = {
            cluster_obj_id: id
         };

         const [cluster_results] = await conn.query(
         `SELECT id
          FROM cluster
         WHERE cluster.id = :cluster_obj_id;`, clusterFilters );

         let cluster = {};
         data.cluster_obj = {};
         if (cluster_results.length > 0)
         {
            cluster = cluster_results[0];
            data.cluster_obj = cluster;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const cluster_obj = data.cluster_obj;
         await conn.query(
            `DELETE FROM cluster WHERE id = :id`, cluster_obj );
         cluster_obj.id = cluster_result.insertId;

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}