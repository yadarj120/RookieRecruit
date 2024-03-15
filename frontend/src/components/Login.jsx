import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:9898/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: userType,
          username: username,
          password: password
        })
      });

      console.log(response);

      if (response.ok) {
        const result = await response.json(); 
            if (result === true) {
                if (userType === 'admin') {
                  sessionStorage.setItem('username', username);
                  sessionStorage.setItem('password', password);
                    window.location.href = '/admin_dashboard';
                } else if (userType === 'user') {
                  sessionStorage.setItem('username', username);
                  sessionStorage.setItem('password', password);
                    window.location.href = '/user_dashboard';
                }
            } else {
                alert('Incorrect credentials. Please try again.');
                setUsername('');
                setPassword('');
            }
      } else {
        alert('Authentication failed. Please try again.');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-start"> {/* Align items to the start (left) */}
        <div className="col-md-6 col-lg-4"> {/* Set width to 50% for medium and large screens */}
          <div className="card mt-5 custom-card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userType">User Type</label>
                  <select
                    id="userType"
                    value={userType}
                    onChange={handleUserTypeChange}
                    className="form-control"
                  >
                    <option value="">Select User Type</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="form-control"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block custom-btn">Login</button>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/register">Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
