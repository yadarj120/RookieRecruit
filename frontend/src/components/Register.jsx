import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userType, setUserType] = useState('user');
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
    
    const user = {
      id:userType+username+password,
      username: username,
      password: password
    };

    try {
      const response = await fetch('http://localhost:9898/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      console.log('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div className="container-fluid register-container">
    <div className="row justify-content-start">
      <div className="col-md-6 col-lg-4"> {/* Set width to 50% for medium and large screens */}
        <div className="card mt-5 custom-card">
          <div className="card-body">
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userType">User Type</label>
                <select
                  id="userType"
                  value={userType}
                  onChange={handleUserTypeChange}
                  className="form-control"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
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
              <button type="submit" className="btn btn-primary btn-block custom-btn">Register</button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;

