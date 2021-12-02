import { fetchWithApiToken } from '../services/fetchApi';

const getSchedulesBetweenDates = async (fromDate, toDate) => {
  return fetchWithApiToken(
    `schedules/end-date/${toDate}/start-date/${fromDate}`,
    true
  );
};

export { getSchedulesBetweenDates };
