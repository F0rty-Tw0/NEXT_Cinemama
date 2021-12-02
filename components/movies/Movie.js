import Link from 'next/link';

const Movie = ({ id, title }) => {
  return (
    <>
      This is movie:
      <Link href={`/movies/${id}`} as={`/movies/${id}`}>
       1 {title}
      </Link>
    </>
  );
};

export default Movie;
