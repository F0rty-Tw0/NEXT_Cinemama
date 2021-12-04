import { requestOptions } from 'context';

const authenticate = async (url, credentials) => {
  const options = requestOptions('POST');
  options.body = JSON.stringify(credentials);

  const response = await fetch(url, options);
  const authResponse = await response.json();

  if (response.status === 200) {
    return authResponse;
  } else {
    throw new Error(authResponse.message);
  }
};
export default authenticate;
