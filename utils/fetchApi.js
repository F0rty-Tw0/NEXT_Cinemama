import getApiAccessToken from 'utils/hooks/getApiAccessToken';
import getUserAccessToken from './hooks/getUserAccessToken';

const _fetchData = async (token, query, isExtended) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    `https://cine-mama.herokuapp.com/api/${query}${isExtended ? '?type=extended' : ''}`,
    options
  );
  return res.json();
};

const fetchWithApiToken = async (query, isExtended) => {
  const token = await getApiAccessToken();
  return _fetchData(token, query, isExtended);
};

const fetchWithUserToken = async (query, isExtended) => {
  const token = await getUserAccessToken();
  return _fetchData(token, query, isExtended);
};

export { fetchWithApiToken, fetchWithUserToken };
