import React from 'react';
import { Link } from 'react-router-dom';

import { saved, noLogo } from '../assets/icons';

import { calculateDays } from '../utils';

const JobCardSearchPage = ({ job }) => {
  const jobTitle = job.job_title;
  const days = calculateDays(job.job_posted_at_datetime_utc);

  return (
    <div className="bg-white rounded-md px-5 py-5 border flex flex-col my-4 dark:bg-black_2 dark:border-none">
      <div className="md:flex justify-between items-start space-y-4 md:space-y-0 space-x-2">
        {/* 1st line left side */}
        <div className="flex items-start space-x-3 md:space-x-4">
          <div className="w-16 h-16 p-2 bg-natural_4 rounded-lg dark:bg-black_3">
            <img
              src={job?.employer_logo || noLogo}
              className="rounded-lg object-scale-down"
              alt={job.employer_name}
            />
          </div>
          <div>
            <Link to={`/jobs/${job?.job_id}`}>
              <div className="inline-flex font-semibold text-black_1 dark:text-white">
                {jobTitle}
              </div>
            </Link>
            <div className="mt-2 text-natural_3">
              {job?.employer_name} * {job?.job_city} * {days} days ago
            </div>
          </div>
        </div>
        {/* 1st line right side */}
        <button className="group flex flex-col items-end" type="button">
          <div className="hidden sm:block md:inline-flex rounded-lg text-center px-2.5 py-1 gap-2 bg-natural_4 group-hover:bg-primary  text-natural group-hover:text-white dark:bg-black_2">
            <p>Save Job</p>
            <img
              src={saved}
              alt="bookmark"
            />
          </div>
        </button>
      </div>
      {/* 2ed line */}
      <div className="my-3 text-natural_3">
        <p className="line-clamp-3">
          {job.job_description}
        </p>
      </div>
      {/* 3rd line */}
      {/* <div className="flex flex-wrap items-center gap-2 ">
        <p className="text-sm inline-flex bg-natural_4 text-natural_5 rounded-full text-center px-2.5 py-1">PHP</p>
        <p className="text-sm inline-flex bg-natural_4 text-natural_5 rounded-full text-center px-2.5 py-1">Laravel</p>
        <p className="text-sm inline-flex bg-natural_4 text-natural_5 rounded-full text-center px-2.5 py-1">CSS</p>
        <p className="text-sm inline-flex bg-natural_4 text-natural_5 rounded-full text-center px-2.5 py-1">React</p>
      </div> */}
      {/* 4th line */}
      <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2 my-5">
        {/* 4th line left sie */}
        <div className="flex flex-row items-start space-x-3 md:space-x-10">
          {/* <p className="text-lg font-bold">$15k-20k <span className="font-normal text-natural_3">/month</span></p>
          <p className="text-lg font-bold">54 <span className="font-normal text-natural_3">People Applied</span></p> */}
          <p className="bg-natural_4 font-bold text-natural_5 rounded-sm text-center py-1 dark:bg-black_3">{job.job_is_remote ? 'Remote Work' : null }</p>
        </div>
        {/* 4th line right side */}
        <div className="flex justify-between sm:items-end">
          <button type="button" className="bg-secondary hover:bg-primary text-natural_3 px-6 py-2.5 mx-4 rounded-lg dark:bg-black_3">
            Message
          </button>
          <button type="button" className="bg-primary hover:bg-natural_5 text-white px-6 py-2.5 mx-4 rounded-lg">
            Apply now
          </button>
        </div>
      </div>
    </div>

  );
};

export default JobCardSearchPage;
