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
        <div>
            <h1>Welcome, {username}!</h1>
            <div className="job-tile">
                {jobs.map((job, index) => (
                    <div key={index} className="job-description">
                        <h2>{job.name}</h2>
                        <p>Location: {job.location}</p>
                        <p>Tech Stack: {job.techStack}</p>
                        <button onClick={() => handleApply(job.id)}>Apply</button>
                    </div>
                ))}
            </div>
            <button onClick={handleViewAppliedJobs}>View Applied Jobs</button>
        </div>
    );
};

export default User;
