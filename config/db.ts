import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();


export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.connect()
  .then(() =>{
    console.log('✅ Kết nối PostgreSQL thành công!')
  })
  .catch((err) => {
    console.log('Lỗi kết nối PostgreSQL:', err.message);
  })