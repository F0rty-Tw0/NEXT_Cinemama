import Link from 'next/link';

const Movie = ({ id, title }) => {
  return (
    <>
      This is movie:
      <Link href={`/movies/${id}`} as={`/movies/${id}`}>
        {`title: ${title}`}
      </Link>
    </>
  );
};

export default Movie;
