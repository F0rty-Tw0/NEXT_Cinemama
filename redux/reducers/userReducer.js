import { SET_USER, REMOVE_USER } from '../types';

const userReducer = (
  state = {
    user: {},
  },
  action
) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { user: {} };

    default:
      return state;
  }
};

export default userReducer;
