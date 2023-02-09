const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

let config = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
};
let pool = mysql.createPool(config);

let promisePool = pool.promise();

let connections = {
  getAll: async () => {
    const [results] = await promisePool.query("select * from shopping_list");
    return results;
  },
};

module.exports = connections;
