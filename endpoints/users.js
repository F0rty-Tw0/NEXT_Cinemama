import { fetchWithApiToken } from 'utils/fetchApi';
const getUser = (email) => {
  return fetchWithApiToken(`users/email/${email}`, true);
};

export { getUser };
