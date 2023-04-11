import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavBar } from './components';
import { Dashboard, EstimatedSalaries, JobSearch, JobDetails, CompanyDetails } from './pages';

const App = () => (
  <div className="dark:bg-black_BG min-h-full">
    <NavBar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/jobsearch" element={<JobSearch />} />
      <Route path="/estimatedSalaries" element={<EstimatedSalaries />} />
      <Route path="/jobs/:jobID" element={<JobDetails />} />
      <Route path="/companies/:companyName" element={<CompanyDetails />} />
    </Routes>
  </div>
);

export default App;
