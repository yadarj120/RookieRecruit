import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Job from './components/Job.jsx';
import Admin from './components/Admin.jsx';
import User from './components/User.jsx';
import AppliedJobs from './components/AppliedJobs.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job" element={<Job />} />
        <Route path="/admin_dashboard" element={<Admin />} />
        <Route path="/user_dashboard" element={<User />} />
        <Route path="/applied_jobs" element={<AppliedJobs/>} />
      </Routes>
    </Router>
  );
}

export default App;
