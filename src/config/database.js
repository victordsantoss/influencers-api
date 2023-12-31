import 'dotenv/config';
import pg from 'pg';

const dbConfig = {
  dialect: "postgres",
  dialectModule: pg, // I've added this.
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // url: process.env.DB_HOST
};

export default dbConfig;
