// calculate the job posted days.

export const calculateDays = (dateObj) => {
  const currentDate = new Date();
  if (dateObj !== undefined) {
    const convert1 = Date.parse(dateObj);
    const difference = currentDate.getTime() - convert1;
    const result = Math.ceil(difference / (1000 * 3600 * 24));
    return result;
  }
  return 0;
};

export const showToday = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const today = new Date().toLocaleDateString('en-US', options);
  return today;
};

// filter salary range
export const filterSalaryRange = (data, salaryBounds) => {
  const getSalaryRange = (arr, key, func) => func(...arr.map((o) => o[key]));

  const maxSalary = getSalaryRange(salaryBounds, 'max', Math.max);

  const minSalary = getSalaryRange(salaryBounds, 'min', Math.min);

  const displayData = data?.filter((job) => {
    if (job.job_min_salary && job.job_max_salary) {
      return job.job_min_salary >= minSalary && job.job_max_salary <= maxSalary;
    }
    return null;
  });

  return displayData;
};

export const sortJobsByCompanyName = ({ jobs }) => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...jobs];
  sorted.sort((job1, job2) => {
    if (job1.employer_name < job2.employer_name) return -1;
    if (job1.employer_name > job2.employer_name) return 1;
    return 0;
  });
  return sorted;
};

export const sortJobsByDatePosted = ({ jobs, ASC = true }) => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...jobs];
  sorted.sort((job1, job2) => {
    const convert1 = calculateDays(job1.job_posted_at_datetime_utc);
    const convert2 = calculateDays(job2.job_posted_at_datetime_utc);
    if (convert1 < convert2) return ASC ? -1 : 1;
    if (convert1 > convert2) return ASC ? 1 : -1;
    return 0;
  });
  return sorted;
};

export const sortJobsByBaseAnnualSalary = ({ jobs, ASC = true }) => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...jobs];
  sorted.sort((job1, job2) => {
    if (job1.job_salary < job2.job_salary) return ASC ? -1 : 1;
    if (job1.job_salary > job2.job_salary) return ASC ? 1 : -1;
    return 0;
  });
  return sorted;
};

/* jobs found */
export const jobFound = ({ totalCount }) => {
  let jobsFoundMessage = `${totalCount} Jobs`;
  switch (totalCount) {
    case 0: {
      jobsFoundMessage = 'No Jobs found.';
      break;
    }
    case 1: {
      jobsFoundMessage = 'Only one Job found.';
      break;
    }

    default:
      break;
  }
  return jobsFoundMessage;
};
