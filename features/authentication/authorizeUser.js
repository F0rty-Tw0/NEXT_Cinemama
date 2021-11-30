import checkIfTokenIsExpired from '../../utils/checkIfTokenIsExpired';
import getAuthorization from '../../services/getAuthorization';
const url = 'https://cine-mama.herokuapp.com/api/auth/login';

const authorizeUser = async (credentials) => {
  const accessToken = localStorage.getItem('token');
  if (!accessToken || checkIfTokenIsExpired(accessToken)) {
    try {
      const authorization = await getAuthorization(url, credentials);

      localStorage.setItem(
        'user',
        JSON.stringify({
          token: authorization.accessToken,
          id: authorization.id,
          email: authorization.email,
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  }
};
export default authorizeUser;
