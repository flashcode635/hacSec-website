import { pool } from './db.js';

// Used on signup, to block duplicate username/email
export async function findUserByUsernameOrEmail(username, email) {
  const result = await pool.query(
    `SELECT * FROM users WHERE username = $1 OR email = $2 LIMIT 1`,
    [username, email]
  );
  return result.rows[0]; // undefined if no match
}

// Signup - inserts the row and returns it
export async function insertUser({ firstName, lastName, username, email, password }) {
  const result = await pool.query(
    `INSERT INTO users (first_name, last_name, username, email, password)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [firstName, lastName, username, email, password]
  );
  return result.rows[0];
}

// Login - lookup by username OR email (matches your frontend's login field)
export async function findUserForLogin(usernameOrEmail) {
  const result = await pool.query(
    `SELECT * FROM users WHERE username = $1 OR email = $1 LIMIT 1`,
    [usernameOrEmail]
  );
  return result.rows[0];
}