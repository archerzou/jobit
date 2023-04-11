import React from 'react';
import { Link } from 'react-router-dom';

import { CompanyLogo } from '../assets';
import { briefCase, clock } from '../assets/icons';
import useGetFormattedJobData from '../utils/useGetFormattedJobData';
import Loader from './Loader';

const JobCard = ({ job }) => {
  const jobData = useGetFormattedJobData(job);

  if (!jobData) return <Loader />;

  return (
    <div className="bg-white dark:bg-black_2 p-3 px-5 rounded-md drop-shadow-sm flex flex-col justify-around">
      <div className="flex justify-between my-2 mb-6 gap-x-4">
        <div className="relative bottom-2 w-5 h-5 font-bold text-#B5B5BE hover:cursor-pointer order-1 flex-none flex-grow-0 justify-self-start">
          ...
        </div>
        <div className="flex-none w-16 h-16 p-2 bg-natural_4 dark:bg-[#2C2C2C] rounded-lg self-center">
          <img
            src={jobData.logo || CompanyLogo}
            className="rounded-lg object-scale-down"
            alt="company logo"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-y-3">
          <Link to={`/jobs/${job?.job_id}`}>
            <p className="w-full dark:text-white font-bold text-lg">{jobData.title}</p>
          </Link>

          <div className="flex gap-1.5">
            {jobData.skills.map((skill, index) => (
              <p
                key={index}
                className="bg-natural_4 dark:bg-black_3 dark:text-natural p-1.5 rounded-md text-natural_5 text-sm"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="my-1 text-natural_3 dark:text-natural font-medium text-base">
        <p>{jobData.description}</p>
      </div>
      <div className="my-5 flex justify-evenly">
        <p className="bg-natural_4 dark:bg-black_3 p-1 sm:p-1.5 rounded-md text-natural_5 flex gap-x-2 text-sm items-center">
          <img src={briefCase} alt="brief case icon" />
          {jobData.employmentType}
        </p>
        <p className="bg-natural_4 dark:bg-black_3 p-1 sm:p-1.5 rounded-md text-natural_5 flex gap-x-2 text-sm items-center">
          <img src={clock} alt="clock icon" />
          {jobData.daysLeft} days left
        </p>
      </div>
      <div className="realative flex justify-end items-center">
        <Link
          to={`/jobs/${job.job_id}`}
          className="bg-primary hover:secondary text-white p-3 rounded-lg"
        >
          Visit Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
