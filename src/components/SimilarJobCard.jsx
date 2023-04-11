import React from 'react';
// import Moment from 'react-moment';
import { Save } from '../assets';
// import { useGetSearchQuery } from '../redux/services/jobSearchApi';

const SimilarJobCard = ({ job }) => {
  const {
    employer_logo: logo,
    job_title: title,
    job_city: city,
    job_country: country,
    max_salary: maxSalary,
    job_id: jobID,
    job_offer_expiration_datetime_utc: jobExpirationDate,
  } = job;

  // console.log('Job', job);

  const formatTime = (expirationDateTime) => {
    if (expirationDateTime) {
      const expirationDate = new Date(expirationDateTime);
      const todayDate = new Date();

      const difference = expirationDate.getTime() - todayDate.getTime();

      const daysDifference = difference / (1000 * 3600 * 24);

      return Math.round(daysDifference);
    }
    return '30+';
  };
  return (
    <div className="flex gap-4 flex-wrap ">
      <div className="mt-4 shrink-0 grow w-full bg-white p-6 rounded-2xl dark:bg-black_2 dark:text-secondary">
        <div className="">
          <div className="flex justify-between ">
            <div className="flex">
              <a href="/">
                <img
                  src={logo || 'https://via.placeholder.com/150'}
                  alt=""
                  className="w-12 aspect-square rounded-full mr-4 object-contain"
                />
              </a>
              <div>
                <h4 className="font-bold break-words text-black_1 dark:text-white">
                  {title}
                </h4>
                <p className="text-sm text-natural dark:text-natural">
                  {city}, {country}
                </p>
              </div>
            </div>
            <div>
              {maxSalary ? (
                <p className="font-bold text-white">
                  {' '}
                  {maxSalary}
                  <span className="text-natural text-sm font-normal">
                    / Hr
                  </span>
                </p>
              ) : (
                'NA'
              )}
            </div>
          </div>
          <div
            className="flex justify-between items-center
            "
          >
            <p className="text-natural dark:text-secondary text-sm">
              <span>{formatTime(jobExpirationDate) ? formatTime(jobExpirationDate) : 'NA'}&nbsp; days left</span>
            </p>
            <div className="flex items-center align-middle mt-2">
              <a href="/" className="border mr-4 p-2 rounded-md border-natural border-opacity-10">
                <img src={Save} alt="" className="" />
              </a>
              <a
                href={`/jobs/${jobID}`}
                className="px-4 py-2 rounded-xl text-sm text-primary bg-primary bg-opacity-10"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarJobCard;
