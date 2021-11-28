import Link from 'next/link';

const Movie = ({ name }) => {
  return (
    <>
      This is movie:{' '}
      <Link href={`/movies/${name}`} as={`/movies/${name}`}>
        {name}
      </Link>
    </>
  );
};

export default Movie;
