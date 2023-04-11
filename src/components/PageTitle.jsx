import React from 'react';

const PageTitle = ({ title, subtitle }) => (
  <div className="py-2 mb-3">
    <h1 className="font-bold text-xl md:text-3xl mb-2 text-black_1 dark:text-white">{title}</h1>
    <p className="hidden sm:block text-base text-natural">{subtitle}</p>
  </div>
);

export default PageTitle;
