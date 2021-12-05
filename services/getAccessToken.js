import checkIfTokenIsExpired from 'utils/checkIfTokenIsExpired';
import { getCookie } from 'utils/cookieHelper';
import authenticate from './authenticate';
const url = process.env.NEXT_PUBLIC_API_AUTH;
const apiCredentials = {
  email: process.env.API_USERNAME,
  password: process.env.API_PASSWORD,
};
let accessToken;
let userAccessToken;

const getApiAccessToken = async () => {
  if (checkIfTokenIsExpired(accessToken)) {
    const response = await authenticate(url, apiCredentials);
    const authorization = await response.json();
    accessToken = authorization.accessToken;
  }
  return accessToken;
};

const getUserAccessToken = async (userCredentials) => {
  userAccessToken = getSavedUserToken();
  if (checkIfTokenIsExpired(userAccessToken)) {
    const response = authenticate(url, userCredentials);
    userAccessToken = await response.json();
  }
  return userAccessToken;
};

const getSavedUserToken = () => {
  const user = getCookie('user');
  if (user) {
    const savedUser = JSON.parse(user);
    return savedUser.accessToken;
  }
  return null;
};

export { getApiAccessToken, getUserAccessToken, getSavedUserToken };
