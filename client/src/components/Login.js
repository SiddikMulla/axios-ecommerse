// Login.js
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'; // Import UserContext
import './Login.css';

function Login() {
  const { loginUser } = useContext(UserContext); // Access loginUser function from UserContext
  const history = useHistory(); // Access history object for redirection
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Check if username and password are not empty
      if (!username || !password) {
        setError('Please enter both username and password.');
        return;
      }

      // Call loginUser function from userService.js
      const success = await loginUser(username, password);

      if (success) {
        // Redirect to dashboard or perform any other actions upon successful login
        console.log('Login successful');
        history.push('/dashboard'); // Example redirection to '/dashboard'
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
