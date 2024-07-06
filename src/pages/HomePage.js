// src/pages/HomePage.js
import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const { filteredJobs } = useContext(JobContext);

  return (
    <div>
      <SearchBar />
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
