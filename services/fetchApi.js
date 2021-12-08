import {
  getApiAccessToken,
  getUserAccessToken,
  getSavedUserToken,
} from 'services/getAccessToken';
import { requestOptions } from 'context';

const _makeRequest = async (method, body, token, query, isExtended) => {
  const options = requestOptions(method);
  options.headers.authorization = `Bearer ${token}`;

  if (body) options.body = JSON.stringify(body);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${query}${
      isExtended ? '?type=extended' : ''
    }`,
    options
  );
  if (res.status === 201) return res;
  const response = await res.json();
  if (res.status !== 200) throw new Error(response.message);
  return response;
};

const fetchWithApiToken = async (query) => {
  const token = await getApiAccessToken();
  return _makeRequest('GET', null, token, query, true);
};

const fetchWithUserToken = async (query) => {
  const token = await getUserAccessToken();
  return _makeRequest('GET', null, token, query, false);
};

const fetchWithSavedUserToken = (query) => {
  const token = getSavedUserToken();
  return _makeRequest('GET', null, token, query, false);
};

const postWithSavedUserToken = (body, query) => {
  const token = getSavedUserToken();
  return _makeRequest('POST', body, token, query, false);
};

export {
  fetchWithApiToken,
  fetchWithUserToken,
  fetchWithSavedUserToken,
  postWithSavedUserToken,
};
