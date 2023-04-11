import React from 'react';

const JobAlert = () => (
  <div className="relative flex flex-col bg-white rounded-lg p-5 min-w-60 space-y-3 mb-4 dark:bg-black_2">
    <p className="font-bold dark:text-white">Create Job Alert</p>
    <p className="text-natural_3 text-sm">Increase an opportunity to get chance for new jobs.</p>
    <input
      type="text"
      className="px-4 py-2 bg-gray rounded-lg focus:outline-none bg-gray-50 text-sm text-natural_3 dark:bg-black_3"
      placeholder="Type Your Email"
    />
    <button type="button" className="text-primary font-semibold border-2 text-xs border-primary px-6 py-2.5 rounded-lg">
      Create Job Alert
    </button>
  </div>
);

export default JobAlert;
