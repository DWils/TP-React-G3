import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [resetRequested, setResetRequested] = useState(false);
const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', JSON.stringify({
        username: username,
        password: password,
      }));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id)=>{
  }

  navigate('/login/:profile')}

  const handleResetPassword = async () => {
    try {
      // Simulate password reset request (no actual modification)
      await axios.post('https://fakestoreapi.com/auth/resetPassword', JSON.stringify({
        email: resetEmail,
      }));
      setResetRequested(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login Page</h2>
      <div className="login-form">
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="password-reset">
        <p>Forgot your password?</p>
        {resetRequested ? (
          <p>Check your email for reset instructions.</p>
        ) : (
          <div>
            <input
              className="reset-email-input"
              type="email"
              placeholder="Your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button className="reset-button" onClick={handleResetPassword}>
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
