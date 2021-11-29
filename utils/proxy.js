const url = 'https://cine-mama.herokuapp.com/api/auth/login'; //NOTE: env
const credentials = { email: 'admin@gmail.com', password: 'test' }; //NOTE: env
let headers;

const getApiAuthorizationHeaders = async () => {
  if (!headers) {
    const options = {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      credentials: 'same-origin',
      ache: 'no-cache',
      referrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    };
    const authResponse = await fetch(url, options);
    const apiAccount = await authResponse.json();
    const accessToken = apiAccount.accessToken;

    const authorization = `Bearer ${accessToken}`;
    headers = {
      headers: {
        authorization,
      },
    };
  }
  return headers;
};

export { getApiAuthorizationHeaders };
