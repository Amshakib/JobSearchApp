// src/components/SearchBar.js
import React, { useContext, useState } from 'react';
import { JobContext } from '../context/JobContext';

const SearchBar = () => {
  const { filterJobs } = useContext(JobContext);
  const [term, setTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    filterJobs(term);
  };

  return (
    <div className="flex justify-center my-5">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search Jobs"
        className="w-72 p-2 border border-gray-300 rounded-l-lg text-base"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-800"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
