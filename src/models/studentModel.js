const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {
  tables: {
    student: {
      id: { type: 'varchar', primary: true, autoIncrement: false, isSaveStatement: true, insert: true, update: true },
      first_name: { type: 'varchar', primary: false, autoIncrement: false, isSaveStatement: false, insert: true, update: true },
      last_name: { type: 'varchar', primary: false, autoIncrement: false, isSaveStatement: false, insert: true, update: true },
      email: { type: 'varchar', primary: false, autoIncrement: false, isSaveStatement: false, insert: true, update: true },
      created_on: { type: 'datetime', primary: false, autoIncrement: false, isSaveStatement: false, insert: true, update: false },
      modified_on: { type: 'datetime', primary: false, autoIncrement: false, isSaveStatement: false, insert: false, update: true }
    }
  },

  /* ================= CREATE ================= */

  create: async (data) => {
    const conn = await pool.getConnection();

    try {
      await conn.beginTransaction();

      const student_obj = data.student_obj;
      student_obj.id = uuid();
      student_obj.created_on = new Date();

      await ModelHelper.insert(
        conn,
        'student',
        module.exports.tables.student,
        student_obj
      );

      await conn.commit();
      return data;

    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  },

  /* ================= UPDATE ================= */

  update: async (data) => {
    const conn = await pool.getConnection();

    try {
      await conn.beginTransaction();

      const student_obj = data.student_obj;
      student_obj.modified_on = new Date();

      await ModelHelper.update(
        conn,
        'student',
        module.exports.tables.student,
        student_obj
      );

      await conn.commit();
      return data;

    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  },

  /* ================= GET BY ID ================= */

  getById: async (id) => {
    const conn = await pool.getConnection();
    const data = {};

    try {
      const filters = { student_id: id };

      const [results] = await conn.query(
        `SELECT id, first_name, last_name, email, created_on, modified_on
         FROM student
         WHERE id = :student_id`,
        filters
      );

      data.student_obj = results.length > 0 ? results[0] : null;
      return data;

    } catch (err) {
      throw err;
    } finally {
      conn.release();
    }
  },

    findAll: async () => {
    const conn = await pool.getConnection();
    try {
        const [results] = await conn.query(
        `SELECT id, first_name, last_name, email, created_on, modified_on
        FROM student`
        );
        return results;
    } finally {
        conn.release();
    }
    },


  /* ================= DELETE ================= */

  delete: async (id) => {
    const conn = await pool.getConnection();
    const data = {};

    try {
      const filters = { id };

      await conn.query(
        `DELETE FROM student WHERE id = :id`,
        filters
      );

      data.deleted_id = id;
      return data;

    } catch (err) {
      throw err;
    } finally {
      conn.release();
    }
  }
};
