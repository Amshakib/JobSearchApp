// src/components/JobCard.js
import React from 'react';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-xs p-5 transform transition-transform hover:scale-105">
      <CardActionArea component={Link} to={`/job/${job.slug}`}>
        <h2 className="text-lg font-bold text-blue-600 overflow-hidden overflow-ellipsis whitespace-nowrap">{job.title}</h2>
        <h4 className="text-md font-semibold text-gray-800">{job.company_name}</h4>
        <p className="text-sm text-gray-600">{job.location}</p>
        <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: job.description }}></p>
        <div className="flex flex-wrap gap-2 mt-2">
          {job.tags.map(tag => (
            <span key={tag} className="bg-blue-600 text-white py-1 px-2 rounded text-xs">{tag}</span>
          ))}
        </div>
      </CardActionArea>
    </div>
  );
};

export default JobCard;
