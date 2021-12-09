import { SET_BOOKED_SEATS } from '../types';

const bookedSeatsReducer = (
  state = {
    bookedSeats: [],
  },
  action
) => {
  if (action.type === SET_BOOKED_SEATS)
    return {
      ...state,
      bookedSeats: action.payload,
    };
  return state;
};

export default bookedSeatsReducer;
