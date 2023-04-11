/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import { JobDetailsBG, Save, Unsave, MoreOptions } from '../assets';
import { useGetJobWithIDQuery } from '../redux/services/jobSearchApi';
import { Loader, PageTitle, SimilarJobs, SearchJobForm, Error } from '.';
import { today } from '../utils/todayDate';

const JobDetails = () => {
  const { ...currentJob } = useParams();
  const [bookmark, setBookmark] = useState(false);
  // const [datePosted, setDatePosted] = useState('today');

  const { data, isLoading, error } = useGetJobWithIDQuery(currentJob);

  // Update Bookarked Job
  const updateBookmark = (event) => {
    setBookmark((prevBookmark) => !prevBookmark);
  };

  // Added for dark/light mode functionality.
  let bookmarkImage;
  useEffect(() => {
    if (bookmark) {
      bookmarkImage = Save;
    }
    if (!bookmark) {
      bookmarkImage = Unsave;
    }
  }, [bookmark]);

  let job = null;
  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (!isLoading) {
    job = data?.data;
  }

  const thisJob = job[0];

  return (
    <section id="job-details" className="m-auto mx-6 ss:mx-20 py-12">
      <PageTitle title="Let&apos;s find your dream job" subtitle={today} />
      <div className="dark:bg-black_2 rounded-full">
        <SearchJobForm />
      </div>
      <div className="mt-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 ">
          <a
            className="py-1 px-2 bg-natural_2 dark:bg-black_3 text-natural_3 text-sm items-center rounded-md"
            href="/"
          >
            <span className="text-lg">&lt;</span> Back
          </a>
          <div className="mt-8 rounded-2xl  relative bg-white text-natural_3 overflow-hidden p-6 dark:bg-black_2 dark:text-natural_6">
            <img
              src={JobDetailsBG}
              alt=""
              className="rounded-t-xl object-cover w-full"
            />
            <div className="px-4 z-10">
              <img
                src={thisJob && thisJob.employer_logo ? thisJob.employer_logo : 'https://via.placeholder.com/150'}
                alt="Company Logo"
                className="w-12 border-4 rounded-md -mt-4 border-white z-10"
              />
              <div className="grid grid-cols-12 items-center mt-4">
                <div
                  id="jobTitleLocation"
                  className="col-span-12 sm:col-span-6 sm:gap-2 "
                >
                  <div className="flex justify-between sm:order-1 ">
                    <h2 className="font-semibold text-black_1    dark:text-white">
                      {thisJob.job_title}
                    </h2>
                    <div className="flex">
                      <button
                        className="w-4 h-4 mr-4 sm:mr-0"
                        onClick={updateBookmark}
                        type="button"
                      >
                        <img src={bookmark ? Save : Unsave} className="w-4 h-4" alt="" />
                      </button>
                      <button
                        className="sm:hidden"
                        // onClick={updateBookmark}
                        type="button"
                      >
                        <img src={MoreOptions} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap text-xs mt-4 text-natural_3">
                    <ul className="flex">
                      <li className="mr-6">
                        {thisJob.employer_name || 'Not Provided'}
                      </li>
                      <li className="list-disc mr-6">
                        {thisJob.job_city}, {thisJob.job_country}
                      </li>
                      <li className="list-disc">
                        <span>
                          {thisJob.job_posted_at_datetime_utc ? (
                            <Moment fromNow>
                              {thisJob.job_posted_at_datetime_utc}
                            </Moment>
                          ) : (
                            ''
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap justify-between gap-4 rounded-2xl bg-natural_4 dark:bg-black_3 dark:text-white p-4 col-span-12 sm:order-3">
                  <div>
                    <p className="font-normal text-natural  dark:text-natural text-sm">
                      Experience
                    </p>
                    <p className="text-black_1 dark:text-white  font-bold text-sm">
                      {thisJob?.job_required_experience?.required_experience_in_months
                        ? thisJob?.job_required_experience?.required_experience_in_months / 12
                        : 'Not Available'}
                      Years
                    </p>
                  </div>
                  <div className="">
                    <p className="font-normal text-natural dark:text-natural  text-sm">
                      Work Level
                    </p>
                    <p className="text-natural_color dark:text-white  font-bold text-sm  ">
                      Senior Level
                    </p>
                  </div>
                  <div>
                    <p className="font-normal text-natural dark:text-natural  text-sm">
                      Employee Type
                    </p>
                    <p className="text-natural_color dark:text-white  font-bold text-sm  ">
                      {thisJob.job_employment_type}
                    </p>
                  </div>
                  <div>
                    <p className="font-normal text-natural dark:text-natural  text-sm ">
                      Offer Salary
                    </p>
                    <p className="text-natural_color dark:text-white  font-bold text-sm">
                      {thisJob.job_max_salary === 'null'
                        ? 'Not Available '
                        : thisJob.job_max_salary}{' '}
                      /{' '}
                      {thisJob.job_salary_period
                        ? thisJob.job_salary_period
                        : ''}
                    </p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex justify-between sm:justify-around col-span-12 sm:order-2 sm:col-span-6 items-center gap-4 sm:p-2">
                  <a
                    href={thisJob.job_apply_link}
                    className="px-6 py-2 bg-primary rounded-lg text-white text-sm grow text-center"
                  >
                    Apply Now
                  </a>
                  <a
                    href="/"
                    className="px-6 py-2 border border-natural rounded-lg text-sm text-natural_3 grow text-center"
                  >
                    Message
                  </a>
                  <button
                    className="hidden sm:block"
                    // onClick={updateBookmark}
                    type="button"
                  >
                    <img src={MoreOptions} alt="" />
                  </button>
                </div>
              </div>
              <article className="mt-8">
                <h3 className="font-semibold text-black_1  dark:text-white">
                  About The Job
                </h3>
                {thisJob.job_description
                  ? thisJob.job_description.split('\n\n').slice(1, thisJob.job_description.split('\n\n').length).map((item) => (
                    <p key={item} className="text-sm text-natural_3  dark:text-natural mt-2">
                      {item}
                    </p>
                  ))
                  : ''}
              </article>
              <div className="mt-8">
                <h3 className="font-semibold text-black_1 dark:text-white ">
                  Qualifications
                </h3>
                <ul className="mt-2 text-natural_3  dark:text-natural text-sm">
                  {thisJob.job_highlights?.Qualifications
                    ? thisJob?.job_highlights?.Qualifications.map((i) => (
                      <li key={i} className="text-md mt-4 flex list-inside list-disc items-center">
                        <span className="mr-4 flex h-3 w-3 aspect-square items-center justify-center rounded-full border-2 border-primary text-center" />
                        {i}
                      </li>
                    ))
                    : 'Not Available'}
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-black_1 dark:text-white ">
                  Responsibilities
                </h3>
                <ul className="mt-2 text-natural_3  dark:text-natural text-sm">
                  {thisJob?.job_highlights?.Responsibilities
                    ? thisJob?.job_highlights?.Responsibilities.map((i) => (
                      <li key={i} className="text-md mt-4 flex list-inside list-disc items-center">
                        <span className="mr-4 flex h-3 w-3 aspect-square items-center justify-center rounded-full border-2 border-primary text-center" />
                        {i}
                      </li>
                    ))
                    : 'Not Available'}
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-black_1 dark:text-white ">
                  Benefits
                </h3>
                <ul className="mt-2 text-natural_3  dark:text-natural text-sm">
                  {thisJob.job_benefits
                    ? thisJob.job_benefits.map((i) => (
                      <li key={i} className="text-md mt-4 flex list-inside list-disc items-center">
                        <span className="mr-4 flex h-3 w-3 aspect-square items-center justify-center rounded-full border-2 border-primary text-center" />
                        {i}
                      </li>
                    ))
                    : 'Not Available'}
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-black_1 dark:text-white ">
                  About The Company
                </h3>
                <div className="mt-4 sm:flex sm:justify-between sm:items-start ">
                  <div className="flex">
                    <img
                      src={thisJob.employer_logo
                        ? thisJob.employer_logo
                        : 'https://via.placeholder.com/150'}
                      alt=""
                      className="w-12 border-4 rounded-md border-white mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-black_1 dark:text-white ">
                        {thisJob.employer_name
                          ? thisJob.employer_name
                          : 'Not Available'}
                      </h3>
                      <p>203,765 Followers</p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <a
                      href={thisJob.employer_website
                        ? thisJob.employer_website
                        : 'Not Available'}
                      className="px-16 py-2 border border-primary rounded-xl text-sm text-primary"
                    >
                      + Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="similar-job"
          className="mt-8 sm:mt-0 relative overflow-hidden py-4 px-4 col-span-12 md:col-span-4"
        >
          <h3 className="text-black_1 dark:text-white  text-xl font-bold">
            Similar Jobs
          </h3>
          <SimilarJobs currentJob={thisJob.job_title} />
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
