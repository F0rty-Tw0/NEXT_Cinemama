import authenticate from 'services/authenticate';
const url = process.env.NEXT_PUBLIC_API_AUTH;
import { setUser, setError, setLoading, resetLoading } from 'redux/actions';
import { setCookie } from 'utils/cookieHelper';

const authenticateUser = (credentials) => async (dispatch) => {
  dispatch(setLoading());
  const response = await authenticate(url, credentials);
  const userAuthorization = await response.json();
  if (response.status === 200) {
    setCookie('user', JSON.stringify(userAuthorization));
    dispatch(setUser(userAuthorization));
  } else {
    dispatch(setError(userAuthorization.message));
  }
  dispatch(resetLoading());
};

export default authenticateUser;
