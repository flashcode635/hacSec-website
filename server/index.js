import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import dotenv from 'dotenv';
import { eq, or } from 'drizzle-orm';
import { db, schema } from './db/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'learn_x_jwt_secret_key_2025';

app.use(cors());
app.use(express.json());

const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  email: z.string().email("Invalid email address")
});

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required")
});

app.post('/signup', async (req, res) => {
  const validation = signupSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ message: validation.error.errors.map(e => e.message).join(', ') });
  }

  const { firstName, lastName, username, password, email } = validation.data;

  try {
    if (db) {
      const existingUser = await db
        .select()
        .from(schema.users)
        .where(or(eq(schema.users.username, username), eq(schema.users.email, email)))
        .limit(1);

      if (existingUser.length > 0) {
        return res.status(409).json({ message: 'Username or email already exists' });
      }

      const [newUser] = await db
        .insert(schema.users)
        .values({
          firstName,
          lastName,
          username,
          password,
          email,
          plan: 'Human'
        })
        .returning();

      const token = jwt.sign(
        {
          id: newUser.id,
          username: newUser.username,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          plan: newUser.plan
        },
        JWT_SECRET,
        { expiresIn: '1d' }
      );

      return res.status(201).json({
        message: 'User created successfully',
        token,
        user: {
          id: newUser.id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          username: newUser.username,
          email: newUser.email,
          plan: newUser.plan
        }
      });
    } else {
      return res.status(500).json({ message: 'Database connection not initialized' });
    }
  } catch (error) {
    console.error('Error during signup:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const validation = loginSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ message: validation.error.errors.map(e => e.message).join(', ') });
  }

  const { username, password } = validation.data;

  try {
    if (db) {
      const existingUsers = await db
        .select()
        .from(schema.users)
        .where(or(eq(schema.users.username, username), eq(schema.users.email, username)))
        .limit(1);

      const user = existingUsers[0];

      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          plan: user.plan || 'Human'
        },
        JWT_SECRET,
        { expiresIn: '1d' }
      );

      return res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          plan: user.plan || 'Human'
        }
      });
    } else {
      return res.status(500).json({ message: 'Database connection not initialized' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return res.status(200).json({ user: decoded });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
});

export default app;

if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
