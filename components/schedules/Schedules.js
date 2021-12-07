import { useSelector } from 'react-redux';
import Schedule from './Schedule';
import { Tag } from 'styled-components/tag';
import { MoviesTag } from 'styled-components/MoviesTag';

const Schedules = () => {
  const { date } = useSelector((state) => state.date);
  const { filteredSchedules } = useSelector((state) => state.filteredSchedules);

  const getUniqueMovieIds = (selectedSchedules) => {
    const movieIds = selectedSchedules.map((schedule) => schedule.movie.id);
    return [...new Set(movieIds)];
  };

  const uniqueMovieIds = getUniqueMovieIds(filteredSchedules);
  return (
    <>
      <Tag>This is All Schedules for {date}</Tag>

      <MoviesTag>
        {uniqueMovieIds.map((id) => {
          const uniqueSchedule = filteredSchedules?.filter((schedule) => {
            return schedule.movie.id === id;
          });
          return <Schedule filteredSchedule={uniqueSchedule} key={id} />;
        })}
      </MoviesTag>
    </>
  );
};

export default Schedules;
