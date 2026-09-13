import fs from 'node:fs/promises';
import { pool } from './db.js';

try {
  const sql = await fs.readFile(
    new URL('../schema.sql', import.meta.url),
    'utf8'
  );

  await pool.query(sql);

  console.log('Database schema created successfully');
} catch (error) {
  console.error('Failed to create database schema:', error);
  process.exitCode = 1;
} finally {
  await pool.end();
}