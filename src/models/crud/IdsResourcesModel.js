const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      ids_resources: {
         onenet_user_email: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         message: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         onenet_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         onenet_user_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         transaction_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         onenet_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         onenet_user_username: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         publisher: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         keywords: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         standard_license: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ids_version: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         language: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         policy: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         interval_policy_from: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         interval_policy_to: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         source_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      onenet_ids_resourse_to_user: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         ids_resource_id: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         onenet_user_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      onenet_user: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         short_order: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         email: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         enabled: { type: 'bit',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         password: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         username: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const ids_resources_obj = data.ids_resources_obj;
         await ModelHelper.insert(conn, 'ids_resources', module.exports.tables['ids_resources'], ids_resources_obj);

         for (const onenet_ids_resourse_to_user_obj of ids_resources_obj.onenet_ids_resourse_to_user_obj)
            {

            onenet_ids_resourse_to_user_obj.ids_resource_id = ids_resources_obj.id;
            await ModelHelper.insert(conn, 'onenet_ids_resourse_to_user', module.exports.tables['onenet_ids_resourse_to_user'], onenet_ids_resourse_to_user_obj);

            }

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

         const ids_resources_obj = data.ids_resources_obj;
         await ModelHelper.update(conn, 'ids_resources', module.exports.tables['ids_resources'], ids_resources_obj);

         for (const onenet_ids_resourse_to_user_obj of ids_resources_obj.onenet_ids_resourse_to_user_obj)
            {
            onenet_ids_resourse_to_user_obj.ids_resource_id = ids_resources_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'onenet_ids_resourse_to_user', module.exports.tables['onenet_ids_resourse_to_user'], onenet_ids_resourse_to_user_obj);
            }
         await ModelHelper.deleteMissing(conn, 'onenet_ids_resourse_to_user', module.exports.tables['onenet_ids_resourse_to_user'], ids_resources_obj.onenet_ids_resourse_to_user_obj);

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

         /* SELECTION QUERY - ids_resources - */

         const ids_resourcesFilters = [id
         ];
         const [ids_resources_results] = await conn.execute(
         `SELECT onenet_user_email, message, onenet_id, onenet_user_id, transaction_id, onenet_type, onenet_user_username, id, created_by, created_on, modified_by, modified_on, title, description, publisher, keywords, standard_license, ids_version, language, policy, interval_policy_from, interval_policy_to, source_type
          FROM ids_resources
         WHERE ids_resources.id = ? `, ids_resourcesFilters );

         let ids_resources = {};
         data.ids_resources_obj = {};
         if (ids_resources_results.length > 0)
         {
            ids_resources = ids_resources_results[0];
            data.ids_resources_obj = ids_resources;
         } else {
            return data;
         }

         /* SELECTION QUERY - onenet_ids_resourse_to_user - */

         const onenet_ids_resourse_to_userFilters = [ids_resources?.id
         ];
         const [onenet_ids_resourse_to_user_results] = await conn.execute(
         `SELECT id, ids_resource_id, onenet_user_id
          FROM onenet_ids_resourse_to_user
         WHERE onenet_ids_resourse_to_user.ids_resource_id = ? `, onenet_ids_resourse_to_userFilters );

            data.ids_resources_obj.onenet_ids_resourse_to_user_obj = onenet_ids_resourse_to_user_results;

         for (const onenet_ids_resourse_to_user of onenet_ids_resourse_to_user_results)
            {

            /* SELECTION QUERY - onenet_user - */

            const onenet_userFilters = [onenet_ids_resourse_to_user?. onenet_user_id
            ];
            const [onenet_user_results] = await conn.execute(
            `SELECT id, created_by, created_on, modified_by, modified_on, short_order, email, enabled, password, status, username
             FROM onenet_user
            WHERE onenet_user.id = ? `, onenet_userFilters );

            let onenet_user = {};
            data.ids_resources_obj.onenet_ids_resourse_to_user_obj.onenet_user_obj = {};
            if (onenet_user_results.length > 0)
            {
               onenet_user = onenet_user_results[0];
               data.ids_resources_obj.onenet_ids_resourse_to_user_obj.onenet_user_obj = onenet_user;
            } else {
               return data;
            }
            onenet_ids_resourse_to_user}

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

         const ids_resourcesFilters = [id
         ];

         const [ids_resources_results] = await conn.execute(
         `SELECT id
          FROM ids_resources
         WHERE ids_resources.id = ? `, ids_resourcesFilters );

         let ids_resources = {};
         data.ids_resources_obj = {};
         if (ids_resources_results.length > 0)
         {
            ids_resources = ids_resources_results[0];
            data.ids_resources_obj = ids_resources;
         }

         const onenet_ids_resourse_to_userFilters = [ids_resources?.id
         ];

         const [onenet_ids_resourse_to_user_results] = await conn.execute(
         `SELECT id, ids_resource_id
          FROM onenet_ids_resourse_to_user
         WHERE onenet_ids_resourse_to_user.ids_resource_id = ? `, onenet_ids_resourse_to_userFilters );

         data.ids_resources_obj.onenet_ids_resourse_to_user_obj = onenet_ids_resourse_to_user_results;
         for (const onenet_ids_resourse_to_user of onenet_ids_resourse_to_user_results)
            {
            onenet_ids_resourse_to_user}

         /* DELETE FROM DATABASE USING KEYS */

         const ids_resources_obj = data.ids_resources_obj;
         await conn.execute(
            `DELETE FROM ids_resources WHERE id = :id`, ids_resources_obj );
         ids_resources_obj.id = ids_resources_result.insertId;

         for (const onenet_ids_resourse_to_user_obj of ids_resources_obj.onenet_ids_resourse_to_user_obj) {
            await conn.execute(
               `DELETE FROM onenet_ids_resourse_to_user WHERE id = :id`, onenet_ids_resourse_to_user_obj );
            onenet_ids_resourse_to_user_obj.id = onenet_ids_resourse_to_user_result.insertId;
         }

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}