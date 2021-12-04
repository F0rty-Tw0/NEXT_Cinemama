import { SET_SELECTED_SCHEDULE } from '../types';

const selectedSchedulesReducer = (
  state = {
    schedule: {},
  },
  action
) => {
  if (action.type === SET_SELECTED_SCHEDULE)
    return {
      ...state,
      schedule: action.payload,
    };
  return state;
};

export default selectedSchedulesReducer;
