import Link from 'next/link';

const Movie = ({ movie }) => {
  return (
    <>
      This is movie:
      <Link href={`/movies/${movie.id}`} as={`/movies/${movie.id}`}>
        {movie.title}
      </Link>
    </>
  );
};


export default Movie;
