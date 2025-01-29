import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tokenData from './token.json';
import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'david@gmail.com' && password === 'password123') {
      localStorage.setItem('token', tokenData.token);
      setTimeout(() => {
        localStorage.removeItem('token');
        alert('Session expired. Logging out.');
        navigate('/');
      }, 30000); // Token expires after 30 seconds
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
