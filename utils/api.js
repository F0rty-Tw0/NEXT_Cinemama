import getApiAccessToken from 'utils/proxy';

const _fetchApi = async (query, isExtended) => {
  const token = await getApiAccessToken();
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    `https://cine-mama.herokuapp.com/api/${query}${
      isExtended ? '?type=extended' : ''
    }`,
    options
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
