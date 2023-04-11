import React from 'react';

import { clock, gMeet } from '../assets/icons';
import { formattedDate } from '../utils/meetings';

const InterviewCard = ({ meet }) => {
  const { name, gMeetLink } = meet;
  const { day, weekDay, timeStart, timeEnd } = formattedDate(meet);

  return (
    <div className="bg-natural_4  dark:bg-black_3 m-3 p-4 rounded-md drop-shadow-sm flex justify-between">
      <div className="flex gap-x-3 w-full justify-start sm:justify-between">
        <div className="flex flex-col p-1 w-12 h-12 items-center justify-center bg-white dark:bg-black_2 rounded-md font-bold">
          <p className="dark:text-white">{day}</p>
          <p className="text-natural_5  font-semibold">{weekDay}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold dark:text-white">{name}</p>
          <div className="flex gap-1">
            <img src={clock} className="w-4 h-4 self-center mr-1" alt="clock icon" />
            <p className="text-natural_5 text-sm">{timeStart}</p>
            <p className="relative bottom-1 left-1 md:left-1.5 w-5 h-5 font-semibold text-natural_5">-</p>
            <p className="text-natural_5 text-sm">{timeEnd}</p>
          </div>
        </div>
        <div className="flex self-end ml-1">
          <img src={gMeet} className="w-5 h-5 self-center mr-1" alt="google meet icon" />
          <a href={gMeetLink} target="_blank" rel="noopener noreferrer" className="text-natural_5 text-sm">Google Meet</a>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
