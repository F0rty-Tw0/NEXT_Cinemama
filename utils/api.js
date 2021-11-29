import { getApiAuthorizationHeaders } from 'utils/proxy';

const _fetchApi = async (query, isExtended) => {
  const authorization = await getApiAuthorizationHeaders();
  const res = await fetch(
    `https://cine-mama.herokuapp.com/api/${query}${
      isExtended ? '?type=extended' : ''
    }`,
    authorization
  );
  return res.json();
};

const getMovies = async () => {
  return _fetchApi('movies', true);
};

const getMovieById = async (id) => {
  return _fetchApi(`movies/${id}`, true);
};

export { getMovies, getMovieById };
