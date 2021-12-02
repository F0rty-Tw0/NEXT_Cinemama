import getAuthorization from '../../services/getAuthorization';
const url = process.env.API_AUTH;

const authorizeUser = async (credentials) => {
  try {
    const authorization = await getAuthorization(url, credentials);

    localStorage.setItem(
      'user',
      JSON.stringify({
        token: authorization?.accessToken,
        id: authorization?.id,
        email: authorization?.email,
      })
    );
  } catch (error) {
    throw new Error(error);
  }
};
export default authorizeUser;
