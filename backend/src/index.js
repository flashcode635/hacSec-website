import express from 'express';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { pool } from './db.js';

const app = express();
const port = Number(process.env.PORT || 3000);
const jwtSecret = process.env.JWT_SECRET || 'development-only-jwt-secret';

app.use(cors());
app.use(express.json());

function toPublicUser(user) {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    username: user.username,
    email: user.email,
    plan: user.plan || 'Human',
    createdAt: user.created_at,
  };
}

function createToken(user) {
  return jwt.sign(toPublicUser(user), jwtSecret, { expiresIn: '1d' });
}

app.get("/ping",(req,res)=>{
    res.json({message:"pong"});
})
/*
POST /signup

Body:
{
  "first_name": "Ramit",
  "last_name": "Aggarwal",
  "username": "ramit",
  "email": "ramit@example.com",
  "password": "password123"
}
*/
app.post("/signup", async (req, res) => {
  try {
    const firstNameInput = req.body.first_name ?? req.body.firstName;
    const lastNameInput = req.body.last_name ?? req.body.lastName;
    const first_name = typeof firstNameInput === 'string'
      ? firstNameInput.trim()
      : '';
    const last_name = typeof lastNameInput === 'string'
      ? lastNameInput.trim()
      : '';
    const username = typeof req.body.username === 'string'
      ? req.body.username.trim()
      : '';
    const email = typeof req.body.email === 'string'
      ? req.body.email.trim().toLowerCase()
      : '';
    const password = typeof req.body.password === 'string'
      ? req.body.password
      : '';

    if (!first_name || !last_name || !username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'first_name, last_name, username, email and password are required',
      });
    }

    if (first_name.trim().length > 100 || last_name.trim().length > 100) {
      return res.status(400).json({
        success: false,
        message: 'First and last names must be 100 characters or fewer',
      });
    }

    if (!/^[a-zA-Z0-9_]{3,30}$/.test(username)) {
      return res.status(400).json({
        success: false,
        message: 'Username must be 3-30 characters and use only letters, numbers, or underscores',
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    if (password.length < 6 || password.length > 128) {
      return res.status(400).json({
        success: false,
        message: 'Password must be 6-128 characters long',
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
      [first_name.trim(), last_name.trim(), username, email, hashedPassword]
    );

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      token: createToken(result.rows[0]),
      user: toPublicUser(result.rows[0]),
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
POST /signin

Body:
{
  "username": "ramit",
  "password": "password123"
}
*/
app.post(["/signin", "/login"], async (req, res) => {
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
        WHERE username = $1 OR email = $1
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

    return res.status(200).json({
      success: true,
      message: "Signin successful",
      token: createToken(user),
      user: toPublicUser(user),
    });
  } catch (error) {
    console.error("Signin error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});
app.get('/me', (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization?.startsWith('Bearer ')
    ? authorization.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    return res.json({ user: jwt.verify(token, jwtSecret) });
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
})