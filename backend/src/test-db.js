import { pool } from './db.js';
import { findUserByUsernameOrEmail, insertUser, findUserForLogin } from './queries.js';

async function main() {
  const testUser = {
    firstName: 'Test',
    lastName: 'User',
    username: `testuser_${Date.now()}`,
    email: `test_${Date.now()}@example.com`,
    password: 'plaintext123'
  };

  try {
    console.log('1. Checking for existing user (should be undefined)...');
    console.log(await findUserByUsernameOrEmail(testUser.username, testUser.email));

    console.log('2. Inserting user...');
    const inserted = await insertUser(testUser);
    console.log(inserted);

    console.log('3. Finding user for login...');
    console.log(await findUserForLogin(testUser.username));

    console.log('4. Cleaning up test row...');
    await pool.query('DELETE FROM users WHERE id = $1', [inserted.id]);

    console.log('✅ Connection + all three queries work.');
  } catch (err) {
    console.error('❌ Test failed:', err);
  } finally {
    await pool.end();
  }
}

main();