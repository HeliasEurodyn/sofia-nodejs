const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      company: {
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         address: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         phone: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const company_obj = data.company_obj;
         company_obj.id = uuid();
         await ModelHelper.insert(conn, 'company', module.exports.tables['company'], company_obj);

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

         const company_obj = data.company_obj;
         await ModelHelper.update(conn, 'company', module.exports.tables['company'], company_obj);

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

         /* SELECTION QUERY - company - */

         const companyFilters = {
            company_obj_id: id
         };
         const [company_results] = await conn.query(
         `SELECT description, id, created_by, created_on, modified_by, modified_on, name, address, phone
          FROM company
         WHERE company.id = :company_obj_id;`, companyFilters );

         let company = {};
         data.company_obj = {};
         if (company_results.length > 0)
         {
            company = company_results[0];
            data.company_obj = company;
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

         const companyFilters = {
            company_obj_id: id
         };

         const [company_results] = await conn.query(
         `SELECT id
          FROM company
         WHERE company.id = :company_obj_id;`, companyFilters );

         let company = {};
         data.company_obj = {};
         if (company_results.length > 0)
         {
            company = company_results[0];
            data.company_obj = company;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const company_obj = data.company_obj;
         await conn.query(
            `DELETE FROM company WHERE id = :id`, company_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}