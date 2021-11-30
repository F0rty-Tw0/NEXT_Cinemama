import { fetchWithApiToken } from 'services/fetchApi';
const getUser = (email) => {
  return fetchWithApiToken(`users/email/${email}`, true);
};

export { getUser };
