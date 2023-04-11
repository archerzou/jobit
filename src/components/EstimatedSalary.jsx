/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import BarChartCard from './BarChartCard';
import { PageTitle, Loader, Error } from '.';
import { today } from '../utils/todayDate';
import { useGetEstimatedSalariesQuery } from '../redux/services/jobSearchApi';

const EstimatedSalary = () => {
  const [inputData, setInputData] = useState({
    jobTitle: '',
    location: '',
    radius: '',
  });
  const [searchData, setSearchData] = useState({
    jobTitle: '',
    location: '',
    radius: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    setSearchData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  const { data, isLoading, error } = useGetEstimatedSalariesQuery(
    { ...searchData },
    {
      skip: searchData.jobTitle === '' || searchData.location === '' || searchData.radius === '',
    },
  );

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="h-[calc(100vh_-_70px)] m-auto mx-6 ss:mx-20 py-12">
      <section id="job-details" className="">
        <div className="rounded-2xl gap-8 grid grid-cols-2">
          <div className="col-span-2 md:col-span-1 justify-center ">
            <PageTitle title="Estimated Salaries" subtitle={today} />
            <form>
              <label
                htmlFor="jobTitleInput"
                className=" w-full block text-xs font-semibold text-natural dark:text-natural_6"
              >
                Job Title
                <input
                  className="px-5 py-3 text-sm font-normal block border-natural_color dark:border-black w-full mt-2 bg-natural_2 rounded-md text-natural_color dark:bg-black_2 dark:text-natural"
                  placeholder="Job Title"
                  name="jobTitle"
                  value={inputData ? inputData.jobTitle : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="jobTitleInput"
                />
              </label>
              <div className="flex mt-4 gap-4">
                <div className="flex grow flex-wrap">
                  <label
                    htmlFor="jobLocation"
                    className=" w-full block text-xs font-semibold text-natural dark:text-natural_6"
                  >
                    Job Location
                    <input
                      placeholder="Location"
                      className="px-5 py-3 text-sm font-normal block border-natural_color dark:border-black w-full mt-2 bg-natural_2 rounded-md text-natural_color dark:bg-black_2 dark:text-natural"
                      name="location"
                      value={inputData ? inputData.location : ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="jobLocation"
                    />
                  </label>
                </div>
                <div className="flex grow flex-wrap">
                  <label
                    htmlFor="jobRadius"
                    className=" w-full block text-xs font-semibold text-natural dark:text-natural_6"
                  >
                    Job Radius
                    <input
                      placeholder="Radius"
                      className="px-5 py-3 text-sm font-normal block border-natural_color dark:border-black w-full mt-2 bg-natural_2 rounded-md text-natural_color dark:bg-black_2 dark:text-natural"
                      name="radius"
                      value={inputData ? inputData.radius : ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="jobRadius"
                    />
                  </label>
                </div>
              </div>
              <br />
            </form>
          </div>
          <div className="bg-white dark:bg-black_2 col-span-2 md:col-span-1 rounded-2xl p-4">
            {inputData.jobTitle !== '' ? (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-black_1 dark:text-white">
                  Estimated salary
                  <span className="font-normal">&nbsp;for</span>&nbsp;
                  {inputData ? inputData.jobTitle : ''}
                  <span className="font-normal">&nbsp;in</span>&nbsp;
                  {inputData ? inputData.location : ' '}
                </h2>
                <BarChartCard inputData={data ? data.data : data} />
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-black_1 dark:text-white">
                  Please fill the inputs to get estimated salary.
                </h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstimatedSalary;
