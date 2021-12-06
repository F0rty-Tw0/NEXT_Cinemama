import authenticate from 'services/authenticate';
const url = process.env.NEXT_PUBLIC_API_AUTH;
import { setUser, setError } from 'redux/actions';
import { setCookie } from 'utils/cookieHelper';

const authenticateUser = (credentials) => async (dispatch) => {
  const response = await authenticate(url, credentials);
  const userAuthorization = await response.json();
  if (response.status === 200) {
    setCookie('user', JSON.stringify(userAuthorization));
    dispatch(setUser(userAuthorization));
  } else {
    dispatch(setError(userAuthorization.message));
  }
};

export default authenticateUser;
