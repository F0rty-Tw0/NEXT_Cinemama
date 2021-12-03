import { SET_USER } from '../types';
import { HYDRATE } from 'next-redux-wrapper';

const setUserReducer = (
  state = {
    user: {
      id: null,
      email: null,
      token: null,
    },
  },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default setUserReducer;
