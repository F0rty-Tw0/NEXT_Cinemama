import { fetchWithApiToken } from '../services/fetchApi';

const getMovies = async () => {
  return fetchWithApiToken('schedules', true);
};

const getMovieById = async (id) => {
  return fetchWithApiToken(`movies/${id}`, true);
};

export { getMovies, getMovieById };
