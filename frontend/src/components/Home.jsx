import React from 'react';
import JobDescription from './JobDesc.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  const jobs = [
    { name: 'Job 1', location: 'Location 1', techStack: 'Tech Stack 1' },
    { name: 'Job 2', location: 'Location 2', techStack: 'Tech Stack 2' },
    { name: 'Job 3', location: 'Location 3', techStack: 'Tech Stack 3' },
    { name: 'Job 4', location: 'Location 4', techStack: 'Tech Stack 4' },
    { name: 'Job 5', location: 'Location 5', techStack: 'Tech Stack 5' },
    { name: 'Job 6', location: 'Location 6', techStack: 'Tech Stack 6' },
    { name: 'Job 7', location: 'Location 7', techStack: 'Tech Stack 7' },
    { name: 'Job 8', location: 'Location 8', techStack: 'Tech Stack 8' },
    { name: 'Job 9', location: 'Location 9', techStack: 'Tech Stack 9' },
    { name: 'Job 10', location: 'Location 10', techStack: 'Tech Stack 10' },
    { name: 'Job 11', location: 'Location 11', techStack: 'Tech Stack 11' },
    { name: 'Job 12', location: 'Location 12', techStack: 'Tech Stack 12' },
  ];

  return (
    <div>
      <nav>
        <div className="navbar">
          <h1>Job Portal</h1>
          <div className="buttons">
            <button className="candidate-login">Candidate Login</button>
            <button className="employer-login">Employer Login</button>
          </div>
        </div>
      </nav>
      {/* Job descriptions */}
      <div className="job-container">
        {jobs.map((job, index) => (
          <JobDescription key={index} job={job} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
