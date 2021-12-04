import { SET_SEATS } from '../types';

const seatsReducer = (
  state = {
    seats: [],
  },
  action
) => {
  if (action.type === SET_SEATS)
    return {
      ...state,
      seats: action.payload,
    };
  return state;
};

export default seatsReducer;
