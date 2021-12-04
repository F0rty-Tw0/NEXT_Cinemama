import checkIfTokenIsExpired from 'utils/checkIfTokenIsExpired';
import { getCookie } from 'utils/cookieHelper';

const getAuthenticatedUser = () => {
  const userCookie = getCookie('user');
  if (userCookie) {
    const user = JSON.parse(userCookie);
    const accessToken = user.accessToken;
    if (!checkIfTokenIsExpired(accessToken)) {
      return user;
    }
  }
};

export default getAuthenticatedUser;
