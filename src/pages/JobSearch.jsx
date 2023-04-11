import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, JobCardSearchPage, SearchJobForm, JobsSortForm, SearchSideBarForm, Pagination, JobAlert } from '../components';
import { useGetSearchQuery, useGetSearchFilterQuery } from '../redux/services/jobSearchApi';
import { showToday, filterSalaryRange, sortJobsByCompanyName, sortJobsByDatePosted } from '../utils';

const JobSearch = () => {
  const [page, setPage] = useState(1);
  const [sortby, setSortby] = useState('date-posted-asc');
  const { searchTerm, employmentTypesArray, jobRequirementArray, salaryBounds, categoriesArray } = useSelector((state) => state.currentSearch);
  // sidebar search filter array
  const categories = categoriesArray?.join();
  const employmentTypes = employmentTypesArray?.join();
  const jobRequirements = jobRequirementArray?.join();

  // search keywords
  const { data, error, isLoading } = useGetSearchQuery({ searchTerm, page, employmentTypes, jobRequirements, categories });
  const jobs = data?.data;
  // search filter
  const { data: filterData, isLoading: isLoadingFilterData } = useGetSearchFilterQuery(searchTerm);
  const today = showToday();
  if (isLoading && isLoadingFilterData) return <Loader />;
  if (error) return <Error />;

  const employmentTypeData = filterData?.data?.employment_types;
  const jobRequirementData = filterData?.data?.job_requirements;
  const categoriesData = filterData?.data?.categories;

  /* calculate the total job number based on employment type and pass to job search */
  const reduceCount = employmentTypeData?.reduce((a, b) => ({ est_count: a.est_count + b.est_count }));
  const totalCount = reduceCount.est_count;
  const jobsFoundMessage = parseInt(totalCount, 10) > 0 ? `${totalCount} Jobs` : 'No Jobs Found';
  const totalPages = Math.floor(totalCount / 10) + 1;

  let displayData = salaryBounds.length ? filterSalaryRange(jobs, salaryBounds) : jobs;

  if (jobs?.length) {
    if (sortby === 'company') {
      displayData = sortJobsByCompanyName({ jobs });
    } else if (sortby === 'date-posted-asc') {
      displayData = sortJobsByDatePosted({ jobs, ASC: true });
    } else if (sortby === 'date-posted-desc') {
      displayData = sortJobsByDatePosted({ jobs, ASC: false });
    }
  }

  if (displayData?.length > 4) {
    displayData = displayData.slice(0, 4);
  }

  return (
    <div className="bg-secondary px-4 sm:px-20 dark:bg-black_BG">
      <h1 className="text-2xl font-bold text-black_1 pt-12 dark:text-white">Let’s find your dream job</h1>
      <h2 className=" text-natural py-1">{today}</h2>
      <SearchJobForm />
      <div className="sm:flex justify-between gap-5">
        <div className="flex-col rounded-sm lg:min-w-max">
          <JobAlert />
          <div className="hidden sm:block">
            <SearchSideBarForm employmentTypeData={employmentTypeData} jobRequirementData={jobRequirementData} categoriesData={categoriesData} />
          </div>
        </div>
        <div className="flex flex-col">
          {/* Jobs header */}
          <div className="flex justify-between items-center">
            {/* Number of jobs found message  */}
            <div className="text-sm my-2.5">
              <p className="text-natural_3">Showing: <span className="text-black_1 font-bold dark:text-white">{jobsFoundMessage}</span></p>
            </div>
            {/* Sort */}
            <JobsSortForm currentSortby={sortby} setSortby={setSortby} />
          </div>
          <div>
            {displayData?.map((job) => (
              <JobCardSearchPage job={job} key={job.job_id} />
            ))}
          </div>
          {/* Pagination */}
          <Pagination className="mt-4 mb-8" currentPage={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
