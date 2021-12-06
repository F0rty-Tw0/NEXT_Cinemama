import { SELECT_SEATS, RESET_SEATS } from '../types';

const selectSeatsReducer = (
  state = {
    selectedSeats: [],
  },
  action
) => {
  switch (action.type) {
    case SELECT_SEATS:
      if (state.selectedSeats.includes(action.payload)) {
        return {
          ...state,
          selectedSeats: [
            ...state.selectedSeats.filter((seat) => seat !== action.payload),
          ],
        };
      } else {
        return {
          ...state,
          selectedSeats: [...state.selectedSeats, action.payload],
        };
      }
    case RESET_SEATS:
      return {
        ...state,
        selectedSeats: [],
      };
    default:
      return state;
  }
};

export default selectSeatsReducer;
