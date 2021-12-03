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

const fetchWithApiToken = async (query, isExtended) => {
  const token = await getApiAccessToken();
  return _fetchData(token, query, isExtended);
};

const fetchWithUserToken = async (query, isExtended) => {
  const token = await getUserAccessToken();
  return _fetchData(token, query, isExtended);
};

const fetchWithSavedUserToken = async (query, isExtended) => {
  const token = await getSavedUserToken();
  return _fetchData(token, query, isExtended);
};

export { fetchWithApiToken, fetchWithUserToken, fetchWithSavedUserToken };
