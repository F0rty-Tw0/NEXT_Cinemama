import {
  fetchWithApiToken,
  fetchWithSavedUserToken,
} from '../services/fetchApi';

const getAllSeats = async () => {
  return fetchWithApiToken(`seats`);
};

const getSeatsByHallId = async (id) => {
  return fetchWithApiToken(`seats/hall/${id}`);
};

const getSeatsByHallIdDateAndTimeSlot = async (hallId, date, timeSlot) => {
  return fetchWithSavedUserToken(
    `seats/available/${hallId}/date/${date}/time-slot/${timeSlot}`
  );
};
export { getSeatsByHallId, getAllSeats, getSeatsByHallIdDateAndTimeSlot };
