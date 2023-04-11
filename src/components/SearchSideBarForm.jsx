import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';

import { selectTypeAdd,
  selectTypeRemove,
  selectJobRequirementAdd,
  selectJobRequirementRemove,
  selectSalaryAdd,
  selectSalaryRemove,
  selectCategoriesAdd,
  selectCategoriesRemove,
} from '../features/currentSearchOrFilter';

import { salaryRangesOptions } from '../constants';

const SearchSideBarForm = ({ employmentTypeData, jobRequirementData, categoriesData }) => {
  const dispatch = useDispatch();

  const handleCategoriesSelect = (e, option) => {
    if (e.target.checked) {
      dispatch(selectCategoriesAdd(option));
    } else {
      dispatch(selectCategoriesRemove(option));
    }
  };

  const handleTypeSelect = (e, option) => {
    if (e.target.checked) {
      dispatch(selectTypeAdd(option));
    } else {
      dispatch(selectTypeRemove(option));
    }
  };

  const handleJobSelect = (e, option) => {
    if (e.target.checked) {
      dispatch(selectJobRequirementAdd(option));
    } else {
      dispatch(selectJobRequirementRemove(option));
    }
  };

  const handleSalarySelect = (e, option) => {
    if (e.target.checked) {
      dispatch(selectSalaryAdd(option));
    } else {
      dispatch(selectSalaryRemove(option));
    }
  };

  return (
    <div>
      {/* filter section */}
      <div className="grid xl:grid-cols-1 gap-6">
        {/* employment type */}
        <Disclosure as="div" defaultOpen="true">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left font-bold text-natural_3 hover:bg-primary hover:text-white focus:outline-none">
                <span>Type Of Employment</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black_1`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="space-y-4 text-sm text-natural_3 ">
                  {employmentTypeData.map((option) => (
                    <li key={option.value}>
                      <div className="flex justify-between ">
                        <div className="flex items-center">
                          <input
                            id="checkbox-item-1"
                            type="checkbox"
                            onChange={(e) => handleTypeSelect(e, option.value)}
                            className="w-4 h-4 text-natural_3 bg-gray-100 border-gray-300 rounded"
                          />
                          <label htmlFor="checkbox-item-1" className="ml-4 text-sm font-medium text-natural_3">{option.name}</label>

                        </div>
                        <p className="flex bg-natural_4 text-natural_5 rounded-full px-2.5 py-1 dark:bg-black_3">{option.est_count}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Categories */}
        <Disclosure as="div" defaultOpen="true">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left font-bold text-natural_3 hover:bg-primary hover:text-white focus:outline-none">
                <span>Categories</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black_1`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="space-y-4 text-sm text-natural_3 ">
                  {categoriesData.map((option) => (
                    <li key={option.value}>
                      <div className="flex justify-between ">
                        <div className="flex items-center">
                          <input
                            id="checkbox-item-1"
                            type="checkbox"
                            onChange={(e) => handleCategoriesSelect(e, option.value)}
                            className="w-4 h-4 text-natural_3 bg-gray-100 border-gray-300 rounded"
                          />
                          <label htmlFor="checkbox-item-1" className="ml-4 text-sm font-medium text-natural_3">{option.name}</label>

                        </div>
                        <p className="flex bg-natural_4 text-natural_5 rounded-full px-2.5 py-1 dark:bg-black_3">{option.est_count}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* job requirement */}
        <Disclosure as="div" defaultOpen="true">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left font-bold text-natural_3 hover:bg-primary hover:text-white focus:outline-none">
                <span>Experience Level</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black_1`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="space-y-4 text-sm text-natural_3 ">
                  {jobRequirementData.map((option) => (
                    <li key={option.value}>
                      <div className="flex justify-between ">
                        <div className="flex items-center">
                          <input
                            id="checkbox-item-1"
                            type="checkbox"
                            onChange={(e) => handleJobSelect(e, option.value)}
                            className="w-4 h-4 text-natural_3 bg-gray-100 border-gray-300 rounded"
                          />
                          <label htmlFor="checkbox-item-1" className="ml-4 text-sm font-medium text-natural_3">{option.name}</label>

                        </div>
                        <p className="flex bg-natural_4 text-natural_5 rounded-full px-2.5 py-1 dark:bg-black_3">{option.est_count}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* salary range */}
        <Disclosure as="div" defaultOpen="true">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left font-bold text-natural_3 hover:bg-primary hover:text-white focus:outline-none">
                <span>Salary Range</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black_1`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="space-y-4 text-sm text-natural_3 ">
                  {salaryRangesOptions.map((option) => (
                    <li key={option.value}>
                      <div className="flex justify-between ">
                        <div className="flex items-center">
                          <input
                            id="checkbox-item-1"
                            type="checkbox"
                            onChange={(e) => handleSalarySelect(e, option.bounds)}
                            className="w-4 h-4 text-natural_3 bg-gray-100 border-gray-300 rounded"
                          />
                          <label htmlFor="checkbox-item-1" className="ml-4 text-sm font-medium text-natural_3">{option.display}</label>

                        </div>
                        <p className="flex bg-natural_4 text-natural_5 rounded-full px-2.5 py-1 dark:bg-black_3">142</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Location */}
        <Disclosure as="div">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left font-bold text-natural_3 hover:bg-primary hover:text-white focus:outline-none">
                <span>Location</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black_1`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Location Lists</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default SearchSideBarForm;
