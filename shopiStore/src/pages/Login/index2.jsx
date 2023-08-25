
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [resetRequested, setResetRequested] = useState(false);
  const [users, setUsers] = useState([]);

  const redirectToHomePage = (connectedUser) =>{
    alert(connectedUser.username + " est connecté")
    navigate("/")
  }
  const redirectToForgetPassword = () =>{
    alert("mot de passe oublié")
    navigate("/forgetpassword")
  }

const navigate = useNavigate();
  const handleLogin = () => {
    const connectedUser = users.find(user => (user.username == username && user.password == password))
    connectedUser ? redirectToHomePage(connectedUser) : alert("pas de personne à ce pseudo")
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then(response => setUsers(response.data))
  }, [])
  

  const handleClick = (id)=>{
  

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
            <button className="reset-button" onClick={redirectToForgetPassword}>
              Reset Password
            </button>
          </div>
        )}
      </div>
      {console.log(users)}
    </div>
  );
};

export default Login;