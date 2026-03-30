const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'openvas_report', db_field: 'id', section: 'column', type: 'bigint', primary: true, autoIncrement: true, filterOperator: '=' },
      cf_scan_start: { virtual: false, db_table: 'openvas_report', db_field: 'scan_start', section: 'column', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_task_name: { virtual: false, db_table: 'openvas_report', db_field: 'task_name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_report_status: { virtual: false, db_table: 'openvas_report', db_field: 'report_status', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_severity: { virtual: false, db_table: 'openvas_report', db_field: 'severity', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      sqlf_5: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_is_reviewed: { virtual: false, db_table: 'openvas_report', db_field: 'is_reviewed', section: 'column', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      of_scan_start: { virtual: false, db_table: 'openvas_report', db_field: 'scan_start', section: 'orderby', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         openvas_report openvas_report`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            openvas_report.id as cf_id, 
            openvas_report.scan_start as cf_scan_start, 
            openvas_report.task_name as cf_task_name, 
            openvas_report.report_status as cf_report_status, 
            openvas_report.severity as cf_severity, 
            openvas_report.is_reviewed as cf_is_reviewed, 
            (SELECT CASE WHEN scan_end IS NULL THEN 'N/A' ELSE TIMEDIFF(scan_end, scan_start) END FROM openvas_report WHERE openvas_report.id = cf_id) as sqlf_5
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

