import app from './index.js';

async function runTests() {
  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;

    console.log(`Test server running on port ${port}`);

    try {
      // Test 1: Login with valid credentials
      const loginRes = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'testuser', password: 'test@123' })
      });
      const loginData = await loginRes.json();
      if (loginRes.status !== 200) throw new Error(`Login failed with status ${loginRes.status}`);
      if (!loginData.token) throw new Error('Login missing token');
      if (loginData.user.plan !== 'Human') throw new Error('Plan should be Human');
      console.log('✓ Login test passed');

      // Test 2: Verify /me endpoint with JWT
      const meRes = await fetch(`${baseUrl}/me`, {
        headers: { 'Authorization': `Bearer ${loginData.token}` }
      });
      const meData = await meRes.json();
      if (meRes.status !== 200) throw new Error(`/me failed with status ${meRes.status}`);
      if (meData.user.username !== 'testuser') throw new Error('Username mismatch');
      console.log('✓ Auth /me test passed');

      // Test 3: Signup new user
      const signupRes = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: 'Alice',
          lastName: 'Smith',
          username: 'alicesmith',
          password: 'password123',
          email: 'alice@example.com'
        })
      });
      const signupData = await signupRes.json();
      if (signupRes.status !== 201) throw new Error(`Signup failed with status ${signupRes.status}`);
      if (!signupData.token) throw new Error('Signup missing token');
      if (signupData.user.firstName !== 'Alice') throw new Error('First name mismatch');
      console.log('✓ Signup test passed');

      console.log('All backend tests passed successfully!');
    } catch (err) {
      console.error('Test failed:', err);
      process.exitCode = 1;
    } finally {
      server.close(() => {
        process.exit(process.exitCode || 0);
      });
    }
  });
}

runTests();
