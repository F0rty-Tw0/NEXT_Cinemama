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
      {filteredSchedule.map((schedule) => {
        return (
          <div key={schedule.id}>
            <p>{schedule.timeSlot}</p>
          </div>
        );
      })}
    </>
  );
};

export default Schedule;
