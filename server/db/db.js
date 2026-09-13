import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import dotenv from 'dotenv';
import * as schema from './schema.js';

dotenv.config();

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

let pool = null;
let db = null;

if (connectionString) {
  pool = new Pool({
    connectionString,
    family: 4,
    ssl: connectionString.includes('sslmode=require') || process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
  });
  db = drizzle(pool, { schema });
}else{
  console.error("Connection not found")
}

export { db, pool, schema };
