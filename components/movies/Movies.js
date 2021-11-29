import Movie from '@/components/movies/Movie';

const Movies = ({ movies }) => {
  return (
    <>
      This is All Movies <br></br>
      {movies.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </>
  );
};

export default Movies;
