const today = new Date();
const hoursToAdd = 5;
const hoursToAdd2 = 8;
const daysToAdd = 3;

const firstDate = new Date(today.getTime());
firstDate.setDate(firstDate.getDate() + daysToAdd);
const secondDate = new Date(today.getTime());
secondDate.setHours(today.getHours() + hoursToAdd);
const thirdDate = new Date(today.getTime());
thirdDate.setHours(today.getHours() + hoursToAdd2);

export const meets = [
  { name: 'UIHUT Job Interview', date: firstDate, gMeetLink: 'https://meet.google.com/oqd-ntpq-dvo' },
  { name: 'Meeting With Thomas L.', date: secondDate, gMeetLink: 'https://meet.google.com/oqd-ntpq-dvo' },
  { name: 'Job Interview', date: thirdDate, gMeetLink: 'https://meet.google.com/oqd-ntpq-dvo' },
];

export const formattedDate = (meet) => {
  const day = new Date(meet.date).getDay();
  const weekDay = new Date(meet.date).toLocaleDateString('en-US', { weekday: 'short' });
  const timeStart = new Date(
    Math.round(meet.date.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000),
  ).toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  });
  const timeEnd = new Date(
    Math.round(meet.date.getTime() / (60 * 60 * 1000)) * (60 * 60 * 1000)
      + 60 * 60 * 1000,
  ).toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  });

  return { day, weekDay, timeStart, timeEnd };
};
