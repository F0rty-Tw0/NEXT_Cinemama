import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';

const checkIfTokenIsExpired = (token) => {
  if (token) {
    const decodedToken = jwtDecode(token);
    const expirationDate = dayjs(decodedToken.exp * 1000);
    const currentDate = dayjs();
    return currentDate.isAfter(expirationDate);
  }
  return true;
};

export default checkIfTokenIsExpired;
