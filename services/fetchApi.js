import { getApiAccessToken, getUserAccessToken } from 'services/getAccessToken';

const _fetchData = async (token, query, isExtended) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    `${process.env.API_URL}/${query}${isExtended ? '?type=extended' : ''}`,
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
