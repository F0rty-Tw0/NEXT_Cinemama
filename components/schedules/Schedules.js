import Schedule from './Schedule';
const Schedules = ({ schedules, todayDate }) => {
  const getUniqueMovieIds = (selectedSchedules) => {
    const movieIds = selectedSchedules.map((schedule) => schedule.movie.id);
    return [...new Set(movieIds)];
  };

  const uniqueMovieIds = getUniqueMovieIds(schedules);
  return (
    <>
      This is All Schedules for {todayDate}
      <br></br>
      {uniqueMovieIds.map((id) => {
        const filteredSchedule = schedules.filter((schedule) => {
          return schedule.movie.id === id;
        });
        return <Schedule filteredSchedule={filteredSchedule} key={id} />;
      })}
    </>
  );
};

export default Schedules;
