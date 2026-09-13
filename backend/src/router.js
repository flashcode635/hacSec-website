import express from "express";
import bcrypt from "bcryptjs";
import { pool } from "../db.js";

const router = express.Router();

/*
POST /auth/signup

Body:
{
  "first_name": "Ramit",
  "last_name": "Aggarwal",
  "username": "ramit",
  "email": "ramit@example.com",
  "password": "password123"
}
*/
router.post("/signup", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      password,
    } = req.body;

    // Basic validation
    if (
      !first_name ||
      !last_name ||
      !username ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message:
          "first_name, last_name, username, email and password are required",
      });
    }

    // Check whether username or email already exists
    const existingUser = await pool.query(
      `
        SELECT id
        FROM users
        WHERE username = $1 OR email = $2
        LIMIT 1
      `,
      [username, email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Username or email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Insert user
    const result = await pool.query(
      `
        INSERT INTO users (
          first_name,
          last_name,
          username,
          email,
          password
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING
          id,
          first_name,
          last_name,
          username,
          email,
          plan,
          created_at
      `,
      [
        first_name,
        last_name,
        username,
        email,
        hashedPassword,
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Signup error:", error);

    // PostgreSQL unique constraint
    if (error.code === "23505") {
      return res.status(409).json({
        success: false,
        message: "Username or email already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});


/*
POST /auth/signin

Body:
{
  "username": "ramit",
  "password": "password123"
}
*/
router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    // Find user
    const result = await pool.query(
      `
        SELECT
          id,
          first_name,
          last_name,
          username,
          email,
          password,
          plan
        FROM users
        WHERE username = $1
        LIMIT 1
      `,
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    const user = result.rows[0];

    // Compare plaintext password against bcrypt hash
    const passwordMatches = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    // Never send password hash to frontend
    delete user.password;

    return res.status(200).json({
      success: true,
      message: "Signin successful",
      user,
    });
  } catch (error) {
    console.error("Signin error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;