import { SET_LOADING, RESET_LOADING } from '../types';

const loadingReducer = (
  state = {
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
