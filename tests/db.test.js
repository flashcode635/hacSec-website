import { db, schema, pool } from '../server/db/index.js';
import { eq } from 'drizzle-orm';

async function runDbTests() {
  console.log('--- Running Database Tests ---');
  if (!db) {
    console.error('Database instance is not configured.');
    process.exit(1);
  }

  try {
    const testUsername = `testdb_${Date.now()}`;
    const testEmail = `testdb_${Date.now()}@example.com`;

    // 1. Insert sample user
    const [insertedUser] = await db
      .insert(schema.users)
      .values({
        firstName: 'DBTest',
        lastName: 'User',
        username: testUsername,
        email: testEmail,
        password: 'dbpassword123',
        plan: 'Human'
      })
      .returning();

    if (!insertedUser || !insertedUser.id) {
      throw new Error('Failed to insert sample user into PostgreSQL');
    }
    console.log(`✓ Inserted sample user with ID: ${insertedUser.id}`);

    // 2. Query user by username
    const fetchedUsers = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.username, testUsername))
      .limit(1);

    if (fetchedUsers.length === 0 || fetchedUsers[0].email !== testEmail) {
      throw new Error('Failed to query inserted user from PostgreSQL');
    }
    console.log(`✓ Fetched sample user successfully: ${fetchedUsers[0].username}`);

    console.log('All DB tests passed successfully!\n');
  } catch (err) {
    console.error('DB test failed:', err);
    process.exitCode = 1;
  } finally {
    if (pool) {
      await pool.end();
    }
    if (process.exitCode && process.exitCode !== 0) {
      process.exit(process.exitCode);
    }
  }
}

runDbTests();
