import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { UserContext } from '../contexts/UserContext';
import './Login.css';

function Login() {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        setError('Please enter both username and password.');
        return;
      }

      const success = await loginUser(username, password);

      if (success) {
        console.log('Login successful');
        navigate('/dashboard'); // Use navigate function to navigate to '/dashboard'
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
