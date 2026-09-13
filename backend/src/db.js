import pg from "pg";
import dotenv from "dotenv";
import dns from "node:dns/promises";

dotenv.config();

const { Pool } = pg;

const url = new URL(process.env.DATABASE_URL);

const host = url.hostname;
const port = Number(url.port || 5432);

const addresses = await dns.resolve4(host);
const ipv4 = addresses[0];

console.log("Neon host:", host);
console.log("Using IPv4:", ipv4);

export const pool = new Pool({
  host: ipv4,
  port,
  user: decodeURIComponent(url.username),
  password: decodeURIComponent(url.password),
  database: url.pathname.slice(1),

  ssl: {
    rejectUnauthorized: false,
    servername: host,
  },

  connectionTimeoutMillis: 15000,
});