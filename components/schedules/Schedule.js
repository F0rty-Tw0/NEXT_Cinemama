import Link from 'next/link';

const Schedule = ({ id, title }) => {
  return (
    <>
      This is schedule:
      <Link href={`/movies/${id}`} as={`/movies/${id}`}>
        {`title: ${title}`}
      </Link>
    </>
  );
};

export default Schedule;
