import { SET_SEATS, RESET_SEATS } from '../types';

const seatsReducer = (
  state = {
    seats: [],
  },
  action
) => {
  switch (action.type) {
    case SET_SEATS:
      return {
        ...state,
        seats: action.payload,
      };
    case RESET_SEATS:
      return {
        ...state,
        seats: [],
      };
    default:
      return state;
  }
};

export default seatsReducer;
