import checkIfTokenIsExpired from '../utils/checkIfTokenIsExpired';
import getAuthorization from './getAuthorization';
const url = process.env.NEXT_PUBLIC_API_AUTH;
const apiCredentials = {
  email: process.env.API_USERNAME,
  password: process.env.API_PASSWORD,
};
let accessToken;
let userAccessToken;

const getApiAccessToken = async () => {
  if (!accessToken || checkIfTokenIsExpired(accessToken)) {
    const authorization = await getAuthorization(url, apiCredentials);
    accessToken = authorization.accessToken;
  }
  return accessToken;
};

const getUserAccessToken = async (credentials) => {
  userAccessToken = localStorage.getItem('token');
  if (!userAccessToken || checkIfTokenIsExpired(userAccessToken)) {
    const authorization = await getAuthorization(url, credentials);
    userAccessToken = authorization.accessToken;
    if (authorization) {
      localStorage.setItem('token', userAccessToken);
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: authorization.id,
          email: authorization.email,
        })
      );
    }
  }
  return userAccessToken;
};

export { getApiAccessToken, getUserAccessToken };
