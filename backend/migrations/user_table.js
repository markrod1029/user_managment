// migrations/user_table.js
module.exports = async function runUserTableMigration(connection) {
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fname VARCHAR(255) NOT NULL,
      mname VARCHAR(255),
      lname VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      phone VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP    
    )
  `);

  console.log(' User table migration completed.');
};
