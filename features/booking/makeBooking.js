import { postWithSavedUserToken } from 'services/fetchApi';

const makeBooking = (seats, scheduleId, userId) => {
  const seatIds = seats.map((seat) => {
    return { id: seat.id };
  });
  const body = {
    schedule: { id: scheduleId },
    seats: seatIds,
    user: { id: userId },
  };
  return postWithSavedUserToken(body, 'reservations');
};
export default makeBooking;
