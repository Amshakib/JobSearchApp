// // src/context/JobContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const JobContext = createContext();

// const JobProvider = ({ children }) => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [jobsPerPage] = useState(10);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('https://www.arbeitnow.com/api/job-board-api')
//       .then(response => {
//         setJobs(response.data.data);
//         setFilteredJobs(response.data.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Error fetching jobs');
//         setLoading(false);
//       });
//   }, []);

//  const filterJobs = (term, jobType) => {
//   setSearchTerm(term);
//   let filtered = jobs;
//   if (term !== '') {
//     filtered = filtered.filter(job => job.title.toLowerCase().includes(term.toLowerCase()));
//   }
//   if (jobType !== '') {
//     filtered = filtered.filter(job => job.job_types.includes(jobType));
//   }
//   setFilteredJobs(filtered);
//   setCurrentPage(1);  // Reset to first page after filtering
// };


//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <JobContext.Provider value={{
//       jobs: filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage),
//       filterJobs,
//       loading,
//       error,
//       paginate,
//       currentPage,
//       totalPages: Math.ceil(filteredJobs.length / jobsPerPage)
//     }}>
//       {children}
//     </JobContext.Provider>
//   );
// };

// export { JobContext, JobProvider };


// src/context/JobContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// const JobContext = createContext();
export const JobContext = createContext();

const JobProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios.get('https://www.arbeitnow.com/api/job-board-api') 
      .then(response => {
        setJobs(response.data);
        setFilteredJobs(response.data);
      });
  }, []);

  const filterJobs = (term) => {
    const lowercasedTerm = term.toLowerCase();
    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(lowercasedTerm) ||
      job.company_name.toLowerCase().includes(lowercasedTerm) ||
      job.location.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredJobs(filtered);
  };

  return (
    <JobContext.Provider value={{ filteredJobs, filterJobs }}>
      {props.children}
    </JobContext.Provider>
  );
};
export {JobProvider};
export default JobProvider;

