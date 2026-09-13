import { pool } from "./db.js";

try {
  const result = await pool.query("SELECT NOW()");
  console.log("✅ Neon connected:", result.rows[0]);
} catch (error) {
  console.error("❌ Neon connection failed:");
  console.error(error);
} finally {
  await pool.end();
}