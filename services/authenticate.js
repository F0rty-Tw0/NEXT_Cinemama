import { requestOptions } from 'context';

const authenticate = (url, credentials) => {
  const options = requestOptions('POST');
  options.body = JSON.stringify(credentials);
  return fetch(url, options);
};
export default authenticate;
