import Schedule from './Schedule';

const Schedules = ({ schedules, movieIds }) => {
  return (
    <>
      This is All Schedules <br></br>
      {movieIds.map((id) => {
        const filteredSchedule = schedules.filter(
          (schedule) => schedule.movie.id === id
        );
        return <Schedule filteredSchedule={filteredSchedule} key={id} />;
      })}
    </>
  );
};

export default Schedules;
