import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { searchJob } from '../features/currentSearchOrFilter';
import { search, pin, briefCase } from '../assets/icons';

const SearchJobForm = () => {
  const initialValues = {
    jobTitle: '',
    location: '',
    jobType: '',
  };
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // contact query in three search iunput
    const contactQuery = `${values.jobTitle}${values.location ? `${values.location},` : ''}${values.jobType ? `${values.jobType},` : ''}`;
    // remove the space between three input
    const query = contactQuery.replace(/\s/g, '');
    if (query.length) {
      dispatch(searchJob(query));
    }
  };

  return (
    <div className="my-5 block">
      {/* Jobs Search */}
      <form id="searchForm" className="w-full" onSubmit={handleSubmit}>
        <div className="grid gap-1 sm:grid-cols-10 sm:grid-rows-1 sm:gap-0 ">
          <div className="pl-8 py-2 flex col-span-3 bg-white rounded-lg dark:bg-black_2">
            <img
              src={search}
              alt="search logo"
            />
            <input
              className="w-full p-2 outline-none dark:bg-black_2 dark:text-natural "
              type="search"
              placeholder="Job Title, Company, or Keywords"
              value={values.jobTitle}
              onChange={handleInputChange}
              name="jobTitle"
              label="jobTitle"
            />
          </div>
          <div className="flex col-span-3 bg-white pl-8 py-2 rounded-lg dark:bg-black_2">
            <img
              src={pin}
              alt="pin logo"
            />
            <input
              className="w-full p-2 outline-none dark:bg-black_2 dark:text-natural"
              type="search"
              placeholder="Location"
              value={values.location}
              onChange={handleInputChange}
              name="location"
              label="location"
            />
          </div>
          <div className="flex col-span-3 bg-white pl-8 py-2 rounded-lg dark:bg-black_2">
            <img
              src={briefCase}
              alt="briefCase logo"
            />
            <input
              className="w-full p-2 outline-none dark:bg-black_2 dark:text-natural"
              type="search"
              placeholder="Job Type"
              value={values.jobType}
              onChange={handleInputChange}
              name="jobType"
              label="jobType"
            />
          </div>
          <div className="grid justify-items-stretch col-span-3 sm:col-span-1 sm:justify-items-end rounded-lg bg-white p-2 dark:bg-black_2">
            {/* Search button */}
            <button type="submit" form="searchForm" className=" bg-primary p-2 hover:bg-natural_5 text-white px-3 py-2 rounded-md ">
              Find Jobs
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchJobForm;
