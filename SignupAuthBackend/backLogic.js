import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Log all incoming requests for debugging
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});
const companyMail = process.env.COMPANY_EMAIL;
const companyPassword = process.env.COMPANY_EMAIL_APP_PASSWORD;
console.log('Loaded env:', process.env.COMPANY_EMAIL, process.env.COMPANY_EMAIL_APP_PASSWORD);
// if (!companyMail || !companyPassword) {
//   console.error('❌ COMPANY_EMAIL or COMPANY_EMAIL_APP_PASSWORD not set in .env file');
//   process.exit(1);
// }
let users = [
    {
        email: "test@gmail.com",
        password: "test@123",
        firstName: "Test",
        lastName: "User",
        username: "testuser"
    }
];

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: companyMail, // Replace with your email
        pass: companyPassword    // Replace with your email app password
    }
});

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
}).passthrough();

app.post('/signup', (req, res) => {
    const validation = signupSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ message: validation.error.errors.map(e => e.message).join(', ') });
    }

    const { firstName, lastName, username, password, email } = validation.data;

    const userExists = users.some(user => user.username === username || user.email === email);
    if (userExists) {
        return res.status(409).json({ message: 'Username or email already exists' });
    }

    const newUser = { firstName, lastName, username, password, email };
    users.push(newUser);

    const mailOptions = {
        from: companyMail,
        to: email,
        subject: 'Sign Up Successful!',
        text: `Hi ${firstName},\n\nThank you for signing up!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(201).json({ message: 'User created, but failed to send email.' });
        }
        res.status(201).json({ message: 'User created and confirmation email sent.' });
    });
});

app.post('/login', (req, res) => {
    const validation = loginSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ message: validation.error.errors.map(e => e.message).join(', ') });
    }

    const { username, password } = validation.data;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful' });
        res.json({
        //    has list of variables required in the front emd side after auth is done to make front end more interactive and personalized.
            plan:"human" ,  // plan of person
            state:"true"
        })
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
