import useSWR from 'swr';
import { fetchWithUserToken } from 'services/fetchApi';

const useGetLoggedUser = () => {
  const { data, error, ...rest } = useSWR('users/user', fetchWithUserToken);
  return { data, error, loading: !data && !error, ...rest };
};

const getLoggedUser = () => {
  return fetchWithUserToken('users/user');
};
export { useGetLoggedUser, getLoggedUser };
