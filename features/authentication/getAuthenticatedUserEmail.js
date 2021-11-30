import checkIfTokenIsExpired from 'utils/checkIfTokenIsExpired';
import unAuthorizeUser from './unAuthorizeUser';

const getAuthenticatedUserEmail = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const accessToken = user?.token;
  if (accessToken || checkIfTokenIsExpired(accessToken)) {
    return user?.email;
  } else {
    unAuthorizeUser();
  }
};

export default getAuthenticatedUserEmail;
