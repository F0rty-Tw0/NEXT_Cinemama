import { SET_FILTERED_SCHEDULES } from '../types';

const filteredSchedulesReducer = (
  state = {
    filteredSchedules: [],
  },
  action
) => {
  if (action.type === SET_FILTERED_SCHEDULES)
    return {
      ...state,
      filteredSchedules: action.payload,
    };
  return state;
};

export default filteredSchedulesReducer;
