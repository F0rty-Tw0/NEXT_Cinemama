const setSchedulesToStorage = (schedules) => {
  localStorage.setItem('schedules', JSON.stringify(schedules));
};

const getSchedulesFromStorage = () => {
  const schedule = localStorage.getItem('schedules');
  return JSON.parse(schedule);
};

export { setSchedulesToStorage, getSchedulesFromStorage };
