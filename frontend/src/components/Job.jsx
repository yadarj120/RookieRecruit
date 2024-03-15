import React, { useState } from 'react';

const Job = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const job = {
      id: id,
      name: name,
      desc: desc,
      location: location
    };

    try {
      const response = await fetch('http://localhost:9898/addJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
      });

      if (!response.ok) {
        throw new Error('Failed to add job');
      }

      console.log('Job added successfully');
    } catch (error) {
      console.error('Error adding job:', error.message);
    }
  };

  return (
    <div className="container-fluid job-container">
    <div className="row justify-content-start">
      <div className="col-md-6 col-lg-4">
        <div className="card mt-5 custom-card">
          <div className="card-body">
            <h2 className="text-center mb-4">Add Job</h2>
            <form onSubmit={handleSubmit} className="job-form">
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  id="id"
                  value={id}
                  onChange={handleIdChange}
                  className="form-control"
                  placeholder="Enter job ID"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="form-control"
                  placeholder="Enter job name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea
                  id="desc"
                  value={desc}
                  onChange={handleDescChange}
                  className="form-control"
                  placeholder="Enter job description"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={handleLocationChange}
                  className="form-control"
                  placeholder="Enter job location"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block job-btn">Add Job</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Job;
