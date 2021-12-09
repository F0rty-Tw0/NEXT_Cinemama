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

const getAvailableSeatsByHallIdDateAndTimeSlot = (hallId, date, timeSlot) => {
  return fetchWithSavedUserToken(
    `seats/available/${hallId}/date/${date}/time-slot/${timeSlot}`
  );
};

const getBookedSeatsByHallIdDateAndTimeSlot = (hallId, date, timeSlot) => {
  return fetchWithSavedUserToken(
    `seats/booked/${hallId}/date/${date}/time-slot/${timeSlot}`
  );
};

export {
  getSeatsByHallId,
  getAllSeats,
  getAvailableSeatsByHallIdDateAndTimeSlot,
  getBookedSeatsByHallIdDateAndTimeSlot
};
