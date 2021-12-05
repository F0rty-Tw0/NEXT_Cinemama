import { useSelector } from 'react-redux';
import Schedule from './Schedule';
const Schedules = () => {
  const { date } = useSelector((state) => state.date);
  const { error } = useSelector((state) => state.error); //NOTE: Move to a separate component
  const { filteredSchedules } = useSelector(
    (state) => state.filteredSchedules
  );

  const getUniqueMovieIds = (selectedSchedules) => {
    const movieIds = selectedSchedules.map((schedule) => schedule.movie.id);
    return [...new Set(movieIds)];
  };

  const uniqueMovieIds = getUniqueMovieIds(filteredSchedules);
  return (
    <>
      This is All Schedules for {date}
      <br />
      <h2>{error}</h2>
      {uniqueMovieIds.map((id) => {
        const uniqueSchedule = filteredSchedules?.filter((schedule) => {
          return schedule.movie.id === id;
        });
        return <Schedule filteredSchedule={uniqueSchedule} key={id} />;
      })}
    </>
  );
};

export default Schedules;
