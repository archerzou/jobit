import { useEffect, useState } from 'react';

import { techSkills } from './techSkills';

const formatTitle = (title) => {
  const titleWords = title?.split(' ');
  if (titleWords.length > 3) {
    let newTitle = titleWords?.slice(0, 3).join(' ');
    if (newTitle[newTitle.length - 1] === ',') newTitle = newTitle.slice(0, -1);
    return `${newTitle}...`;
  }

  return title;
};

const formatDescription = (description) => (description?.length > 300 ? `${description?.substring(0, 300)}...` : description);

const formatEmploymentType = (employmnetType) => {
  if (!employmnetType) return '';
  if (employmnetType === 'FULLTIME') {
    return 'Full Time';
  } if (employmnetType === 'PARTTIME') {
    return 'Part Time';
  }
  return employmnetType.charAt(0) + employmnetType.slice(1).toLowerCase();
};

const formatSkills = (data) => {
  let sectionsWithSkills = [];

  if (data?.job_required_skills?.length > 0) {
    // Take the value of the job required skills section
    sectionsWithSkills = data?.job_required_skills?.map((skill) => skill.toLowerCase());
  } else if (data?.job_highlights?.Qualifications?.length > 0) {
    // Take the value of the job highlights section
    sectionsWithSkills = data?.job_highlights.Qualifications.join(' ').toLowerCase().replace(/,/g, '').split(' ');
  } else {
    // If there are no data from where to get the skills, return an empty array
    return [];
  }

  // Filter the tech skills array to only include the skills that are in the job details
  let count = 0;
  const skills = techSkills.filter((key) => {
    if (count < 4 && sectionsWithSkills.includes(key)) {
      count += 1;
      return true;
    }
    return false;
  }).map((skill) => skill.toUpperCase());

  return skills;
};

const formatTime = (expirationDateTime) => {
  if (expirationDateTime) {
    const expirationdDate = new Date(expirationDateTime);
    const todayDate = new Date();

    const difference = expirationdDate.getTime() - todayDate.getTime();

    const daysDifference = difference / (1000 * 3600 * 24);

    return Math.round(daysDifference);
  }
  return '30+';
};

const formatSalary = (data) => {
  const {
    job_max_salary: maxSalary,
    job_min_salary: minSalary,
    job_salary_currency: currency,
    job_salary_period: period,
  } = data;

  let salary = '';
  if (maxSalary || minSalary || currency || period) {
    let currencySign;
    if (currency === 'USD') {
      currencySign = '$';
    } else if (currency === 'EUR') {
      currencySign = '€';
    } else {
      currencySign = `${currency} `;
    }
    salary = `${currencySign}${minSalary.toLocaleString('en-US')}-${maxSalary.toLocaleString('en-US')}`;
    return [salary, period.toLowerCase()];
  }

  return null;
};

const formatLocation = (data) => {
  const { job_city: city, job_country: country } = data;
  return `${city}, ${country}`;
};

const formatEmployerName = (employerName) => {
  const employerNameWords = employerName?.split(' ');

  if (employerNameWords.length > 3) {
    return `${employerNameWords?.slice(0, 3).join(' ')}...`;
  }

  return employerName;
};

const formatData = (data) => ({
  logo: data?.employer_logo,
  title: formatTitle(data?.job_title),
  description: formatDescription(data?.job_description),
  employmentType: formatEmploymentType(data?.job_employment_type),
  skills: formatSkills(data),
  daysLeft: formatTime(data?.job_offer_expiration_datetime_utc),
  salary: formatSalary(data),
  employerName: formatEmployerName(data?.employer_name),
  location: formatLocation(data),
});

const useGetFormattedJobData = (jobData) => {
  const [formattedData, setFormattedData] = useState();

  useEffect(() => {
    setFormattedData(formatData(jobData));
  }, [jobData]);

  return formattedData;
};

export default useGetFormattedJobData;
