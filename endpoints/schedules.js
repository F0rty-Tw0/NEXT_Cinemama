import { fetchWithApiToken } from '../services/fetchApi';

const getSchedules = async () => {
  return fetchWithApiToken('schedules', true);
};

const getScheduleByDate = async (startDate, endDate) => {
  return fetchWithApiToken(
    `schedules/end-date/${endDate}/start-date/${startDate}`,
    true
  );
};

export { getScheduleByDate, getSchedules };
