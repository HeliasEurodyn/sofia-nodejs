const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      department: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: true,  insert: true,  update: true },
         security_impact: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const department_obj = data.department_obj;
         await ModelHelper.insert(conn, 'department', module.exports.tables['department'], department_obj);

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

         const department_obj = data.department_obj;
         await ModelHelper.update(conn, 'department', module.exports.tables['department'], department_obj);

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

         /* SELECTION QUERY - department - */

         const departmentFilters = [id
         ];
         const [department_results] = await conn.execute(
         `SELECT id, security_impact, title, description
          FROM department
         WHERE department.id = ? `, departmentFilters );

         let department = {};
         data.department_obj = {};
         if (department_results.length > 0)
         {
            department = department_results[0];
            data.department_obj = department;
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

         const departmentFilters = [id
         ];

         const [department_results] = await conn.execute(
         `SELECT id
          FROM department
         WHERE department.id = ? `, departmentFilters );

         let department = {};
         data.department_obj = {};
         if (department_results.length > 0)
         {
            department = department_results[0];
            data.department_obj = department;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const department_obj = data.department_obj;
         await conn.execute(
            `DELETE FROM department WHERE id = :id`, department_obj );
         department_obj.id = department_result.insertId;

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}