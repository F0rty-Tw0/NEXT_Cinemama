import {
  fetchWithApiToken,
  fetchWithSavedUserToken,
} from '../services/fetchApi';
const getAllSeats = () => {
  return fetchWithApiToken(`seats`);
};

const getSeatsByHallId = (id) => {
  return fetchWithApiToken(`seats/hall/${id}`);
};

const getSeatsByHallIdDateAndTimeSlot = (hallId, date, timeSlot) => {
  return fetchWithSavedUserToken(
    `seats/available/${hallId}/date/${date}/time-slot/${timeSlot}`
  );
};
export { getSeatsByHallId, getAllSeats, getSeatsByHallIdDateAndTimeSlot };
