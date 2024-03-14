import React, { useEffect, useState } from 'react';

const Applied = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (!storedUsername) {
      // Redirect to login page if username is null
      window.location.href = '/login';
      return; // Stop further execution of useEffect
    }

    const storedAppliedJobs = sessionStorage.getItem('appliedJobs');
    const storedJobs = sessionStorage.getItem('jobs');

    if (storedAppliedJobs) {
      setAppliedJobs(JSON.parse(storedAppliedJobs));
    }
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  const getAppliedJobDetails = (jobId) => {
    return jobs.find(job => job.id === jobId);
  };

  return (
    <div>
      <h1>Applied Jobs</h1>
      {appliedJobs.map((jobId, index) => {
        const job = getAppliedJobDetails(jobId);
        return job ? (
          <div key={index} className="job-tile">
            <h3>{job.name}</h3>
            <p>Location: {job.location}</p>
            <p>Tech Stack: {job.techStack}</p>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Applied;
