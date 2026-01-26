const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      market: {
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const market_obj = data.market_obj;
         market_obj.id = uuid();
         await ModelHelper.insert(conn, 'market', module.exports.tables['market'], market_obj);

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

         const market_obj = data.market_obj;
         await ModelHelper.update(conn, 'market', module.exports.tables['market'], market_obj);

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

         /* SELECTION QUERY - market - */

         const marketFilters = [id
         ];
         const [market_results] = await conn.execute(
         `SELECT code, id, created_by, created_on, modified_by, modified_on, name
          FROM market
         WHERE market.id = ? `, marketFilters );

         let market = {};
         data.market_obj = {};
         if (market_results.length > 0)
         {
            market = market_results[0];
            data.market_obj = market;
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

         const marketFilters = [id
         ];

         const [market_results] = await conn.execute(
         `SELECT id
          FROM market
         WHERE market.id = ? `, marketFilters );

         let market = {};
         data.market_obj = {};
         if (market_results.length > 0)
         {
            market = market_results[0];
            data.market_obj = market;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const market_obj = data.market_obj;
         await conn.execute(
            `DELETE FROM market WHERE id = :id`, market_obj );
         market_obj.id = market_result.insertId;

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}