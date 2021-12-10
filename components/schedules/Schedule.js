import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import TimeSlot from 'components/schedules/TimeSlot';

const Schedule = ({ filteredSchedule }) => {
  return (
    <Container className='schedule-movie'>
      <Link
        scroll={false}
        passHref
        href={`/schedules/${filteredSchedule[0].movie.id}`}
        as={`/schedules/${filteredSchedule[0].movie.id}`}
      >
        <a>
          <div className='schedule-movie__image'>
            <Image
              width={'300'}
              height={'450'}
              alt={'Schedule Image'}
              className='schedule-movie__image'
              src={`https://www.themoviedb.org/t/p/w300/${filteredSchedule[0].movie.image}`}
            />
            <div className='schedule-movie__rating'>
              {filteredSchedule[0].movie.rating}
            </div>
            <div className='schedule-movie__age'>
              {filteredSchedule[0].movie.minAge}+
            </div>
          </div>
          <p className='schedule-movie__title'>
            {filteredSchedule[0].movie.title}
          </p>
        </a>
      </Link>

      <div className='schedule-movie__genres'>
        {filteredSchedule[0].movie.genres.map((genre) => (
          <p className='schedule-movie__genre' key={genre.id}>
            {genre.name}
          </p>
        ))}
      </div>
      <div className='schedule-movie__time-slot'>
        <TimeSlot schedules={filteredSchedule} />
      </div>
    </Container>
  );
};

export default Schedule;
