import { fetchWithApiToken } from '../services/fetchApi';

const getMovies = async () => {
  return fetchWithApiToken('movies');
};

const getMovieById = async (id) => {
  return fetchWithApiToken(`movies/${id}`);
};

export { getMovies, getMovieById };
