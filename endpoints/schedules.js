import { fetchWithApiToken } from '../services/fetchApi';
const theaterId = process.env.API_THEATER_ID;

const getSchedulesBetweenDates = async (fromDate, toDate) => {
  return fetchWithApiToken(
    `schedules/${theaterId}/end-date/${toDate}/start-date/${fromDate}`
  );
};

export { getSchedulesBetweenDates };
