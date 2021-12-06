import useSWR from 'swr';
import { fetchWithUserToken } from 'services/fetchApi';

// const getLoggedUser = () => {
//   return fetchWithUserToken('users/user');
// };

const useGetLoggedUser = () => {
  const { data, error, ...rest } = useSWR('users/user', fetchWithUserToken);
  //Returning Data, Error, and loading status, if there is no data and no error
  return { data, error, loading: !data && !error, ...rest };
};

export { useGetLoggedUser };
