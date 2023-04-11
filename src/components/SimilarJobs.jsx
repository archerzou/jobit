/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { useGetSearchQuery } from '../redux/services/jobSearchApi';
import { Loader, SimilarJobCard, Error } from '.';

const SimilarJobs = ({ currentJob }) => {
  const [datePosted, setDatePosted] = useState('today');
  const { data, isLoading, error } = useGetSearchQuery({
    searchTerm: currentJob,
    datePosted,
    numPages: 2,
  });
  const jobs = data?.data;

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <div>
      {jobs.slice(0, 10).map((job) => (
        <SimilarJobCard job={job} key={job.job_id} />
      ))}
    </div>
  );
};

export default SimilarJobs;
