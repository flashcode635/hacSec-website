import app from '../server/index.js';
import { pool } from '../server/db/db.js';

async function runTests() {
  console.log('--- Running Server Integration Tests ---');
  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;

    console.log(`Test server running on port ${port}`);

    const uniqueUsername = `user_${Date.now()}`;
    const uniqueEmail = `user_${Date.now()}@example.com`;

    try {
      // Test 1: Signup new user
      const signupRes = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: 'Alice',
          lastName: 'Smith',
          username: uniqueUsername,
          password: 'password123',
          email: uniqueEmail
        })
      });
      const signupData = await signupRes.json();
      if (signupRes.status !== 201) throw new Error(`Signup failed with status ${signupRes.status}: ${JSON.stringify(signupData)}`);
      if (!signupData.token) throw new Error('Signup missing token');
      if (signupData.user.firstName !== 'Alice') throw new Error('First name mismatch');
      console.log('✓ Signup test passed');

      // Test 2: Login with created credentials
      const loginRes = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: uniqueUsername, password: 'password123' })
      });
      const loginData = await loginRes.json();
      if (loginRes.status !== 200) throw new Error(`Login failed with status ${loginRes.status}: ${JSON.stringify(loginData)}`);
      if (!loginData.token) throw new Error('Login missing token');
      if (loginData.user.plan !== 'Human') throw new Error('Plan should be Human');
      console.log('✓ Login test passed');

      // Test 3: Verify /me endpoint with JWT
      const meRes = await fetch(`${baseUrl}/me`, {
        headers: { 'Authorization': `Bearer ${loginData.token}` }
      });
      const meData = await meRes.json();
      if (meRes.status !== 200) throw new Error(`/me failed with status ${meRes.status}`);
      if (meData.user.username !== uniqueUsername) throw new Error('Username mismatch');
      console.log('✓ Auth /me test passed');

      console.log('All server integration tests passed successfully!\n');
    } catch (err) {
      console.error('Server test failed:', err);
      process.exitCode = 1;
    } finally {
      server.close(async () => {
        if (pool) {
          await pool.end();
        }
        process.exit(process.exitCode || 0);
      });
    }
  });
}

runTests();
