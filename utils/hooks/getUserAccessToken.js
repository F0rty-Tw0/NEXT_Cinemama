import checkIfTokenIsExpired from './checkIfTokenIsExpired';
import getAuthorization from './getAuthorization';
const url = 'https://cine-mama.herokuapp.com/api/auth/login';
let accessToken;

const getUserAccessToken = async (credentials) => {
  accessToken = localStorage.getItem('token');
  if (!accessToken || checkIfTokenIsExpired(accessToken)) {
    const authorization = await getAuthorization(url, credentials);
    accessToken = authorization.accessToken;
    if (authorization) {
      localStorage.setItem('token', accessToken);
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: authorization.id,
          email: authorization.email,
        })
      );
    }
  }
  return accessToken;
};
export default getUserAccessToken;
