import React from 'react';

const JobDescription = ({ job }) => {
  return (
    <div className="job-tile">
      <h2>{job.name}</h2>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Tech Stack:</strong> {job.techStack}</p>
    </div>
  );
}

export default JobDescription;
