import {
  fetchWithApiToken,
  fetchWithSavedUserToken,
} from '../services/fetchApi';

const getAllSeats = async () => {
  return fetchWithApiToken(`seats`, true);
};

const getSeatsByHallId = async (id) => {
  return fetchWithApiToken(`seats/hall/${id}`, true);
};

const getSeatsByHallIdDateAndTimeSlot = async (hallId, date, timeSlot) => {
  return fetchWithSavedUserToken(
    `seats/available/${hallId}/date/${date}/time-slot/${timeSlot}`,
    false
  );
};
export { getSeatsByHallId, getAllSeats, getSeatsByHallIdDateAndTimeSlot };
