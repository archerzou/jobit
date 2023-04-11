import React from 'react';

const FormField = ({ img, placeholder, name, value, handleInputChange }) => (
  <div className="flex">
    <img
      src={img}
      alt="search logo"
    />
    <input
      className="w-full p-2 rounded-lg outline-none"
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      name={name}
      label={name}
    />
  </div>
);

export default FormField;
