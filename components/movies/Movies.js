import Movie from '@/components/movies/Movie';

const Movies = ({ schedules, day }) => {
  return (
    <>
      This is All Movies for {day} <br></br>
      {movies.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </>
  );
};

export default Movies;
