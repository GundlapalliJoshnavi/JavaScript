import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // perform authentication logic here
    if (username === 'exampleuser' && password === 'examplepassword') {
      setStatus('Login successful!');
    } else {
      setStatus('Incorrect username or password.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
      <br />
      <p>{status}</p>
    </form>
  );
}

export default LoginForm;