/* eslint-disable no-param-reassign */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// key need to move to env file when production mode
const apiKey = process.env.REACT_APP_RAPID_API_KEY;

export const jobSearchApi = createApi({
  reducerPath: 'jobSearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsearch.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', apiKey);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    // search jobs
    getSearch: builder.query({
      query: ({ searchTerm, page, employmentTypes, jobRequirements, categories, employers, datePosted = '3days', numPages = 1 }) => {
        const params = {
          query: searchTerm,
          page,
          employment_types: employmentTypes,
          job_requirements: jobRequirements,
          categories,
          employers,
          date_posted: datePosted,
          num_pages: numPages,
        };

        // create a new object with only the keys and values that have truthy values
        const filteredParams = Object.keys(params)
          .filter((key) => params[key])
          .reduce((obj, key) => {
            obj[key] = params[key];
            return obj;
          }, {});

        // the URLSearchParams constructor is used to create a new URLSearchParams object
        const queryString = new URLSearchParams(filteredParams).toString();

        return `/search?${queryString}`;
      },
    }),
    // search filter
    getSearchFilter: builder.query({
      query: (searchTerm) => `/search-filters?query=${searchTerm}`,
    }),
    // get estimated-salary
    // required for jobtitle, location, radius
    getEstimatedSalaries: builder.query({
      query: ({ jobTitle, location, radius }) => `/estimated-salary?job_title=${jobTitle}&location=${location}&radius=${radius}`,
    }),
    // Get Job with ID
    getJobWithID: builder.query({
      query: ({ jobID }) => `/job-details?job_id=${jobID}`,
    }),
  }),
});

export const {
  useGetSearchQuery,
  useGetSearchFilterQuery,
  useGetEstimatedSalariesQuery,
  useGetJobWithIDQuery,
} = jobSearchApi;

