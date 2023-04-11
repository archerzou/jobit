import React from 'react';

const JobsSortForm = ({ currentSortby, setSortby }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const newSortby = e.target.value;
    // if (newSortby === 'date-posted-asc') {
    //   const sortedJobs = sortJobsByDatePosted({ jobs, ASC: true });
    //   setDisplayedJobs(sortedJobs);
    // }
    // if (newSortby === 'date-posted-desc') {
    //   const sortedJobs = sortJobsByDatePosted({ jobs, ASC: false });
    //   setDisplayedJobs(sortedJobs);
    // }
    // if (newSortby === 'salary-asc') {
    //   const sortedJobs = sortJobsByBaseAnnualSalary({ jobs, ASC: true });
    //   setDisplayedJobs(sortedJobs);
    // }
    // if (newSortby === 'salary-desc') {
    //   const sortedJobs = sortJobsByBaseAnnualSalary({ jobs, ASC: false });
    //   setDisplayedJobs(sortedJobs);
    // }

    setSortby(newSortby);
  };

  const options = [
    { value: 'company', display: 'Company' },
    { value: 'date-posted-asc', display: 'Date Posted ASC' },
    { value: 'date-posted-desc', display: 'Date Posted DESC' },
    { value: 'salary-asc', display: 'Salary ASC' },
    { value: 'salary-desc', display: 'Salary DESC' },
  ];
  return (
    <div>
      {/* Sort */}
      <div className="flex items-center space-x-2">
        <p
          htmlFor="sorting"
          className="block text-sm font-sm text-natural w-full"
        >
          Sort By:
        </p>
        <select
          id="sorting"
          name="sorting"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-black_3 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={currentSortby}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.display}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobsSortForm;
