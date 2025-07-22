
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',
  database: 'TodoApp',
  password: 'Thuyen3005',
  port: 5432,           
});

pool.connect()
  .then(() => console.log("✅ Đã kết nối PostgreSQL!"))
  .catch((err) => console.error("❌ Lỗi kết nối PostgreSQL:", err));

module.exports = pool;
