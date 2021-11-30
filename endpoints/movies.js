import { fetchWithApiToken } from '../utils/fetchApi';

const getMovies = async () => {
  return fetchWithApiToken('movies', true);
};

const getMovieById = async (id) => {
  return fetchWithApiToken(`movies/${id}`, true);
};
export { getMovies, getMovieById };
