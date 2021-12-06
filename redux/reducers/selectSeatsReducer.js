import { SELECT_SEATS } from '../types';

const selectSeatsReducer = (
  state = {
    selectedSeats: [],
  },
  action
) => {
  if (action.type === SELECT_SEATS) {
    if (state.selectedSeats.includes(action.payload)) {
      return {
        ...state,
        selectedSeats: [...state.selectedSeats.filter((seat) => seat !== action.payload)],
      };
    } else {
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload],
      };
    }
  }
  return state;
};

export default selectSeatsReducer;
