//configuring database

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

pool
  .query("SELECT NOW()") // Test query to verify connection
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err.message));

module.exports = pool;
