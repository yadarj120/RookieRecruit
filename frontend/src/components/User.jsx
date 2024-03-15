import React, { useEffect, useState } from 'react';

const User = () => {
    const jobs = [
        { id: '1', name: 'Job 1', location: 'Location 1', techStack: 'Tech Stack 1' },
        { id: '2', name: 'Job 2', location: 'Location 2', techStack: 'Tech Stack 2' },
        { id: '3', name: 'Job 3', location: 'Location 3', techStack: 'Tech Stack 3' },
        // Add more job objects as needed
    ];
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
    if (!storedUsername) {
      window.location.href = '/login';
    }
        const storedPassword = sessionStorage.getItem('password');
        setUsername(storedUsername);
        setPassword(storedPassword);
    }, []);

    const handleApply = async (jobId) => {
        const requestBody = {
            id: 'user' + username + password,
            username: jobId,
            password: ''
        };

        try {
            const response = await fetch('http://localhost:9898/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                alert('Job application successful');
                setAppliedJobs([...appliedJobs, jobId]);
            } else {
                alert('Job already applied');
            }
        } catch (error) {
            console.error('Error applying to job:', error.message);
        }
    };

    const handleViewAppliedJobs = async () => {
        try {
            const response = await fetch(`http://localhost:9898/appliedJobs?userId=${'user'+username+
        password}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                setAppliedJobs(data);
                sessionStorage.setItem('appliedJobs', JSON.stringify(data));
                sessionStorage.setItem('jobs', JSON.stringify(jobs)); // Store jobs array in session storage
                window.location.href = '/applied_jobs'; // Redirect to Applied Jobs page
            } else {
                alert('Failed to fetch applied jobs');
            }
        } catch (error) {
            console.error('Error fetching applied jobs:', error.message);
        }
    };

    return (
        <div className="container-fluid">
        <h1 className="welcome-heading">Welcome, {username}!</h1>
        <div className="row job-container">
            {jobs.map((job, index) => (
                <div key={index} className="col-md-4">
                    <div className="card job-card">
                        <div className="card-body">
                            <h5 className="card-title">{job.name}</h5>
                            <p className="card-text">Location: {job.location}</p>
                            <p className="card-text">Tech Stack: {job.techStack}</p>
                            <button onClick={() => handleApply(job.id)} className="btn btn-primary">Apply</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={handleViewAppliedJobs} className="btn btn-primary view-jobs-btn">View Applied Jobs</button>
    </div>
    );
};

export default User;
