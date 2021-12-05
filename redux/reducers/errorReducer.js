import { SET_ERROR } from '../types';

const errorReducer = (
  state = {
    error: '',
  },
  action
) => {
  if (action.type === SET_ERROR)
    return {
      ...state,
      error: action.payload,
    };
  return state;
};

export default errorReducer;
