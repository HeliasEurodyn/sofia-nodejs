const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'database',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'ngsoc',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 200,
  connectTimeout: 20000,
  namedPlaceholders: true
});


module.exports = pool;
