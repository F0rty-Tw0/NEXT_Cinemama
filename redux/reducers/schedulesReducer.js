import { SET_SCHEDULES } from '../types';

const schedulesReducer = (
  state = {
    schedules: [],
  },
  action
) => {
  if (action.type === SET_SCHEDULES)
    return {
      ...state,
      schedules: action.payload,
    };
  return state;
};

export default schedulesReducer;
