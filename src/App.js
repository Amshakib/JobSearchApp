// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { JobProvider } from './context/JobContext';
import HomePage from './pages/HomePage';
import JobDetailsPage from './pages/JobDetailsPage';
import theme from './theme';
import './styles.css'; 
import './styles/tailwind.css';
import JobContextProvider from './context/JobContext';

const App = () => {
  return (
    <JobProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/job/:slug" element={<JobDetailsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </JobProvider>
  );
};

export default App;
