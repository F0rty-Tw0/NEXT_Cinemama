import { SET_ERROR, RESET_ERROR } from '../types';

const errorReducer = (
  state = {
    error: null,
  },
  action
) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
