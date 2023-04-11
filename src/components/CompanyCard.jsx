import React from 'react';
// import { Link } from 'react-router-dom';

import { CompanyLogo } from '../assets';
import { pin } from '../assets/icons';
import useGetFormattedJobData from '../utils/useGetFormattedJobData';
import Loader from './Loader';

const CompanyCard = ({ job }) => {
  const jobData = useGetFormattedJobData(job);

  if (!jobData) return <Loader />;

  return (
    <div className="bg-white dark:bg-black_2 p-3 px-5 rounded-md drop-shadow-sm flex flex-col gap-y-3">
      <div className="flex gap-x-3">
        <div className="flex-none w-12 h-12 self-center">
          <img
            src={jobData.logo || CompanyLogo}
            className="rounded-lg object-scale-down"
            alt="company logo"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold dark:text-white">{jobData.employerName}</p>
          {/* <p className="rounded-md text-natural_5 flex gap-x-1 text-sm items-center"><img src={star} />4.8k</p> */}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="rounded-md text-natural_5 flex gap-x-2 text-sm items-center"><img src={pin} alt="location pin" />{jobData.location}</p>
        {/* <p className="rounded-md text-natural_5 flex gap-x-2 text-sm items-center"><img src={briefCase} />05 Job Vacancy</p> */}
      </div>
      <button type="button" className="bg-[#F5F5F8] dark:bg-black_3 hover:secondary font-semibold text-sm text-natural p-3 rounded-lg">
        Visit Now
      </button>
    </div>
  );
};

export default CompanyCard;
