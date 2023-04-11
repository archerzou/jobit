import React, { useEffect, useRef, useState } from 'react';

import { arrowDown } from '../assets/icons';

const Dropdown = ({ options, onOptionSelect, sortByFilter }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].name);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownHover, setIsDropdownHover] = useState(false);
  const containerRef = useRef(null);

  const handleSelectChange = (name, value) => {
    setSelectedOption(name);
    onOptionSelect(value);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsDropdownHover(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current
        && !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div className="relative" ref={containerRef}>
      <div
        className={`flex cursor-pointer ${sortByFilter ? '' : 'p-2 border border-natural_2 dark:border-black_3 rounded-lg shadow-sm px-3'}`}
        onClick={handleToggle}
      >
        {sortByFilter && <span className="text-natural_5 font-semibold shrink-0">Sort by:</span>}
        <p className={`${sortByFilter ? 'text-primary' : 'text-natural_3'} font-semibold ml-1 shrink-0`}>
          {selectedOption}
        </p>
        <img className={`h-4 w-5 self-center ${isOpen && 'rotate-180'}`} src={arrowDown} alt="dropdown arrow" />
      </div>
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-full bg-white dark:bg-black_3 border dark:border-black_BG rounded-md shadow-md z-10"
          onMouseEnter={() => setIsDropdownHover(true)}
        >
          {options.map((option, index) => (
            <button
              key={`${option.value} - ${index}`}
              type="button"
              className={`text-natural_3 w-full text-left px-4 py-2
              ${!isDropdownHover && selectedOption === option.name ? 'bg-gray-100 dark:bg-black_1' : 'hover:bg-gray-100 hover:dark:bg-black_1'}`}
              onClick={() => handleSelectChange(option.name, option.value)}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
