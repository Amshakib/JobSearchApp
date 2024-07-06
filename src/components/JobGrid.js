// src/components/JobGrid.js
import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import JobCard from './JobCard';
import { CircularProgress, Typography, Button, Box } from '@mui/material';

const JobGrid = () => {
  const { jobs, loading, error, paginate, currentPage, totalPages } = useContext(JobContext);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {jobs.map(job => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Button disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>
          Previous
        </Button>
        <Typography variant="body1" style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button disabled={currentPage === totalPages} onClick={() => paginate(currentPage + 1)}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default JobGrid;
