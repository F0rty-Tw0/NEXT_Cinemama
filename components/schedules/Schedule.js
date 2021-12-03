import Link from 'next/link';

const Schedule = ({ filteredSchedule }) => {
  return (
    <>
      This is schedule:
      <Link
        href={`/movies/${filteredSchedule[0].movie.id}`}
        as={`/movies/${filteredSchedule[0].movie.id}`}
      >
        {`title: ${filteredSchedule[0].movie.title}`}
      </Link>
      {filteredSchedule[0].movie.genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
      {filteredSchedule.map((schedule) => (
        <div key={schedule.id}>
          <p>{schedule.timeSlot}</p>
          <p>{schedule.hall.name}</p>
        </div>
      ))}
    </>
  );
};

export default Schedule;
