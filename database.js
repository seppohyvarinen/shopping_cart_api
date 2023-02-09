const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
  })
  .promise();

let connections = {
  getAll: async () => {
    let result = await pool.query("select * from shopping_list");
    return result;
  },
};

module.exports = connections;
