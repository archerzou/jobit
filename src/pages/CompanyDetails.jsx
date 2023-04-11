import React from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader } from '../components';
import { useGetSearchFilterQuery, useGetSearchQuery } from '../redux/services/jobSearchApi';

const CompanyDetails = () => {
  const { companyName } = useParams();
  const { data: filterData, isLoading: isLoadingFilterData, error: errorFilterData } = useGetSearchFilterQuery(companyName);
  const employerId = filterData?.data?.employers.find((employer) => employer.name === companyName)?.value || 'fake-id-until-we-get-the-real-id';

  const { data, isLoading, error } = useGetSearchQuery({ searchTerm: companyName, employers: employerId });
  const companyJobs = data?.data;
  console.log('🚀 ~ file: CompanyDetails.jsx:15 ~ CompanyDetails ~ companyJobs:', companyJobs);

  if (isLoading && isLoadingFilterData) return <Loader />;
  if (error || errorFilterData) return <Error />;

  return (
    <div>CompanyDetails - {companyName}</div>
  );
};

export default CompanyDetails;
