import Movie from '@/components/movies/Movie';

const AllMovies = ({ movies }) => {
  return (
    <>
      This is All Movies <br></br>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </>
  );
};

export default AllMovies;
