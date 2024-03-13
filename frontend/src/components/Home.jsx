import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import JobDescription from './JobDesc.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  // const jobs = [
  //   { name: 'Job 1', location: 'Location 1', techStack: 'Tech Stack 1' },
  //   { name: 'Job 2', location: 'Location 2', techStack: 'Tech Stack 2' },
  //   { name: 'Job 3', location: 'Location 3', techStack: 'Tech Stack 3' },
  //   { name: 'Job 4', location: 'Location 4', techStack: 'Tech Stack 4' },
  //   { name: 'Job 5', location: 'Location 5', techStack: 'Tech Stack 5' },
  //   { name: 'Job 6', location: 'Location 6', techStack: 'Tech Stack 6' },
  //   { name: 'Job 7', location: 'Location 7', techStack: 'Tech Stack 7' },
  //   { name: 'Job 8', location: 'Location 8', techStack: 'Tech Stack 8' },
  //   { name: 'Job 9', location: 'Location 9', techStack: 'Tech Stack 9' },
  //   { name: 'Job 10', location: 'Location 10', techStack: 'Tech Stack 10' },
  //   { name: 'Job 11', location: 'Location 11', techStack: 'Tech Stack 11' },
  //   { name: 'Job 12', location: 'Location 12', techStack: 'Tech Stack 12' },
  // ];

  return (
    <div>
     <nav className="navbar navbar-dark custom-navbar">
  <span className="navbar-brand">RookieRecruiter</span>
  <div className="navbar-nav d-flex flex-row">
    <Link to="/application-status" className="nav-link">Application Status</Link>
    <span className="link-gap"></span>
    <Link to="/notifications" className="nav-link">Notifications</Link>
  </div>
  <Link to="/logout" className="btn btn-outline-light">Logout</Link>
</nav>

<div className="body-container">
  <div className="body-content">
    <h1 className="large-text">Jobs at your fingertips</h1>
    <div className="search-bar">
      <input type="text" className="form-control search-input" placeholder="Job Title or keyword" />
      <input type="text" className="form-control search-input" placeholder="Location" />
      <button className="btn btn-primary search-btn">Search Jobs</button>
    </div>
  </div>
</div>

      {/* Job descriptions */}
      {/* <div className="job-container">
        {jobs.map((job, index) => (
          <JobDescription key={index} job={job} />
        ))}
      </div> */}
      

      <Footer />
    </div>
  );
}

export default Home;
