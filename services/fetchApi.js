import {
  getApiAccessToken,
  getUserAccessToken,
  getSavedUserToken,
} from 'services/getAccessToken';

const _fetchData = async (token, query, isExtended) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${query}${
      isExtended ? '?type=extended' : ''
    }`,
    options
  );
  return res.json();
};

const fetchWithApiToken = async (query) => {
  const token = await getApiAccessToken();
  return _fetchData(token, query, true);
};

const fetchWithUserToken = async (query) => {
  const token = await getUserAccessToken();
  return _fetchData(token, query, false);
};

const fetchWithSavedUserToken = (query) => {
  const token = getSavedUserToken();
  return _fetchData(token, query, false);
};

export { fetchWithApiToken, fetchWithUserToken, fetchWithSavedUserToken };
