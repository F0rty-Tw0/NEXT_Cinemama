import checkIfTokenIsExpired from './checkIfTokenIsExpired';
import getAuthorization from './getAuthorization';
const url = 'https://cine-mama.herokuapp.com/api/auth/login';
const credentials = { email: 'admin@gmail.com', password: 'test' }; //NOTE: env
let accessToken;

const getApiAccessToken = async () => {
  if (!accessToken || checkIfTokenIsExpired(accessToken)) {
    const authorization = await getAuthorization(url, credentials);
    accessToken = authorization.accessToken;
  }
  return accessToken;
};

export default getApiAccessToken;
