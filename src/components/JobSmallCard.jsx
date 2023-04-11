import React from 'react';
import { Link } from 'react-router-dom';

import { CompanyLogo } from '../assets';
import useGetFormattedJobData from '../utils/useGetFormattedJobData';
import Loader from './Loader';

const JobSmallCard = ({ job }) => {
  const jobData = useGetFormattedJobData(job);

  if (!jobData) return <Loader />;

  return (
    <div className="bg-natural_4 dark:bg-black_3  m-3 p-4 rounded-md drop-shadow-sm flex justify-between">
      <div className="flex gap-x-3">
        <div className="flex-none w-12 h-12 self-center">
          <img
            src={jobData.logo || CompanyLogo}
            className="rounded-lg object-scale-down"
            alt="company logo"
          />
        </div>
        <div>
          <Link to={`/jobs/${job.job_id}`}>
            <p className="font-semibold dark:text-white">{jobData.title}</p>
          </Link>
          <div className="flex">
            <p className="text-natural_5 dark:text-natural text-sm">{jobData.employerName}</p>
            <p className="relative bottom-2 dark:text-natural left-1 w-5 h-5 font-semibold text-#D8D8D8">.</p>
            <p className="text-natural_5 dark:text-natural text-sm">{jobData.location}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-end">
        <p className="text-natural_5 text-sm mb-1">{jobData.employmentType}</p>
      </div>
    </div>
  );
};

export default JobSmallCard;
