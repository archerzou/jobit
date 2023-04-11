import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetSearchQuery } from '../redux/services/jobSearchApi';
import { Error, Loader, CompanyCard, JobCard, PageTitle, SectionHeader, JobSmallCard, InterviewCard } from '../components';
import { dropdownOptions, sortByOptions } from '../utils/dropdownOptions';
import { today } from '../utils/todayDate';
import { meets } from '../utils/meetings';
import { selectDatePosted } from '../features/currentSearchOrFilter';

const Dashboard = () => {
  const [datePosted, setDatePosted] = useState('today');
  useDispatch(selectDatePosted(datePosted));
  // eslint-disable-next-line no-unused-vars
  const [sortMeetingsBy, setSortMeetingsBy] = useState('today');
  const { searchTerm, page } = useSelector((state) => state.currentSearch);
  const searchQuery = localStorage.getItem('searchQuery') || searchTerm;

  const { data, isLoading, isFetching, error } = useGetSearchQuery({ searchTerm: searchQuery, page, datePosted, numPages: 2 });
  if (isLoading) return <Loader />;
  const jobs = data?.data;

  if (error) return <Error />;

  return (
    <div className="m-1 bg-secondary_bg sm:m-12 dark:bg-black_BG">
      <PageTitle
        title="Welcome to the Job Search Platform for Developers"
        subtitle={today}
      />
      <div className="flex-col sm:flex-row flex justify-between gap-x-2 flex-wrap lg:gap-y-8">
        <div className="px-2 basis-full lg:basis-8/12">
          <SectionHeader
            title="Latest Job Posts"
            dropdown={dropdownOptions}
            onOptionSelect={setDatePosted}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {isFetching ? (
              <Loader />
            ) : (
              jobs.slice(0, 4).map((job) => <JobCard key={job?.job_id} job={job} jobs={jobs} />)
            )}
          </div>
        </div>

        <div className="basis-full px-1 lg:basis-[32%]">
          <SectionHeader title="Recommended for you" />
          <div className="bg-white dark:bg-black_2  border-white rounded-md overflow-y-scroll scroll-smooth h-96 sm:h-[500px] lg:h-[800px]">
            {jobs.slice(4).map((job) => (
              <JobSmallCard
                key={job?.job_id}
                job={job}
              />
            ))}
          </div>
        </div>

        <div className="px-2 basis-full lg:basis-8/12">
          <SectionHeader title="Featured Companies" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {jobs.slice(-3).map((job, index) => (
              <CompanyCard key={index} job={job} />
            ))}
          </div>
        </div>

        <div className="basis-full px-1 lg:basis-[32%]">
          <div className="py-4" />
          <div className="bg-white dark:bg-black_2 rounded-md p-1">
            <div className="m-4">
              <SectionHeader title="Schedule" sortBy={sortByOptions} onOptionSelect={setSortMeetingsBy} />
            </div>
            {meets.map((meet) => (
              <InterviewCard key={meet.name} meet={meet} />
            ))}
            <div className="flex">
              <button
                type="button"
                className="bg-[#F5F5F8] dark:bg-black_3 hover:secondary font-semibold text-sm text-natural rounded-lg m-3 p-4 w-full"
              >
                See All Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
