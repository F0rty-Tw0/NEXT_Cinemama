import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
const url = 'https://cine-mama.herokuapp.com/api/auth/login';
const credentials = { email: 'admin@gmail.com', password: 'test' }; //NOTE: env
let accessToken;

const _checkIfTokenIsExpired = (token) => {
  const decodedToken = jwtDecode(token);

  const expirationDate = dayjs(decodedToken.exp * 1000);
  const currentDate = dayjs();

  if (currentDate.isAfter(expirationDate)) {
    return true;
  }
  return false;
};

const getApiAccessToken = async () => {
  if (!accessToken || _checkIfTokenIsExpired(accessToken)) {
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
    accessToken = apiAccount.accessToken;
  }
  return accessToken;
};

export default getApiAccessToken;
