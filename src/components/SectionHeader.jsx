import React from 'react';

import Dropdown from './Dropdown';

const SectionHeader = ({ title, dropdown, onOptionSelect, sortBy }) => (
  <div className="flex justify-between my-6">
    <h2 className="font-bold text-lg ml-1 dark:text-white">{title}</h2>
    {dropdown && <Dropdown options={dropdown} onOptionSelect={onOptionSelect} />}
    {sortBy && <Dropdown options={sortBy} onOptionSelect={onOptionSelect} sortByFilter />}
  </div>
);

export default SectionHeader;
