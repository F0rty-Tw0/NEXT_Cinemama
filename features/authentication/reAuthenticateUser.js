import { setUser } from 'redux/actions';

const reAuthenticateUser = (user) => {
  return (dispatch) => {
    dispatch(setUser(user));
  };
};

export default reAuthenticateUser;
