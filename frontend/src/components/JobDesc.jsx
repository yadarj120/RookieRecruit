// JobDesc.jsx
import React from 'react';

const JobDescription = ({ job }) => {
  const handleApply = () => {
    // Implement the logic for applying to the job
    alert(`Applying to ${job.name}`);
  };

  return (
    <div className="job-tile">
      <h2>{job.name}</h2>
      <p>Location: {job.location}</p>
      <p>Tech Stack: {job.techStack}</p>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default JobDescription;
