import authenticate from 'services/authenticate';
const url = process.env.NEXT_PUBLIC_API_AUTH;
import { setUser } from 'redux/actions';
import { setCookie } from 'utils/cookieHelper';

const authenticateUser = (credentials) => async (dispatch) => {
  const userAuthorization = await authenticate(url, credentials);
  setCookie('user', JSON.stringify(userAuthorization));
  dispatch(setUser(userAuthorization));
};

export default authenticateUser;
