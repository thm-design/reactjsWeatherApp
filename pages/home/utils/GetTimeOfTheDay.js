const getTimeOfTheDay = (time) => {
  if (time < 12) return 'morn';
  if (time >= 12 && time <= 17) return 'day';
  if (time > 17 && time <= 21) return 'eve';
  if (time > 21 && time <= 24) return 'night';
  return 'day';
};

export default getTimeOfTheDay;
