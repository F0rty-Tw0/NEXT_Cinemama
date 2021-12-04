import { removeCookie } from 'utils/cookieHelper';
import { removeUser } from 'redux/actions';
import Router from 'next/router';

const deAuthenticateUser = () => {
  {
    return (dispatch) => {
      removeCookie('user');
      dispatch(removeUser());
      Router.push('/');
    };
  }
};

export default deAuthenticateUser;
