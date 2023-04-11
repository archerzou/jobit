import React from 'react';
import { JobDetail } from '../components';
// import { useGetSearchFilterQuery } from '../redux/services/jobSearchApi';

const JobDetails = (currentJob) => {
  const { job_id: jobID } = currentJob;
  return (
    <div className="bg-secondary_bg min-h-screen dark:bg-black_BG dark:text-natural_3 py-8">
      <JobDetail job={currentJob} key={jobID} />
    </div>
  );
};
export default JobDetails;
