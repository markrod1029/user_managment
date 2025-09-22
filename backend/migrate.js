require('dotenv').config();
const mysql = require('mysql2/promise');
const userTableMigration = require('./migrations/user_table');


async function runMigrations() {
  const connection = await mysql.createConnection({
    host: process.env.DEV_DB_HOST,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
  });

  try {
    await userTableMigration(connection); 

    console.log('All migrations completed successfully.');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await connection.end();
  }
}

runMigrations();
