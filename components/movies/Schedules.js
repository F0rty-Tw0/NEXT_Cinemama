import Movie from '@/components/movies/Movie';

const Schedules = ({ schedules, day }) => {
  return (
    <>
      This is All Movies for {day} <br></br>
      {schedules.map((schedule) => (
        <Movie {...schedule} key={schedule.id} />
      ))}
    </>
  );
};

export default Schedules;
