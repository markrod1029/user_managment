const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DEV_DB_HOST,
  user: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_NAME,
  port: process.env.DEV_DB_PORT || 3306,
  ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;