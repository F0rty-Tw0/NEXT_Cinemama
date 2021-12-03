import dayjs from 'dayjs';
import BaseLayout from 'layouts/BaseLayout';
<<<<<<< HEAD
import Schedules from 'components/movies/Schedules';
import { getMovies } from 'endpoints/movies';
import { getSchedules, getScheduleByDate } from 'endpoints/schedules';
import { useState, useEffect } from 'react';

const Home = ({ movies, schedules }) => {
  const [day, setDay] = useState('2021-10-23');
  const today = '2021-10-23';
  const tomorrow = '2021-10-24';
  const dayAfterTomorrow = '2021-10-25';

  useEffect(() => {
    localStorage.setItem('day', day);
  }, [day]);

  const filteredSchedule = schedules.filter((schedule) => () => {
    for (let i = 1; i < schedules.length; i++) {
      if (schedules[i - 1].movie.id == schedules[i].movie.id) {
        schedules.slice(schedule.movie);
      }
    }
  });

  //for date
  /*   const [day, setDay] = useState(null);
  const date = new Date();
  const today =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  const dayTomorrow =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    (date.getDate() + 1);
  const dayAfterTomorrow =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    (date.getDate() + 2);

  useEffect(() => {
    if (day == null) {
      setDay(today);
    }
  }, [day, today]); */

=======
import Schedules from 'components/schedules/Schedules';
import { getSchedulesBetweenDates } from 'endpoints/schedules';

const Home = ({ schedules, uniqueMovieIds }) => {
>>>>>>> eebec3ea9c413a59ae8c558c2876624ae85f6763
  return (
    <BaseLayout
      title='Welcome to the Cinemama Theaters'
      description='The best place to watch movies'
      className='base-layout__main'
    >
<<<<<<< HEAD
      <p>
        <button onClick={() => setDay(today)}>Today</button>{' '}
        <button onClick={() => setDay(tomorrow)}>Tomorrow</button>{' '}
        <button onClick={() => setDay(dayAfterTomorrow)}>After Tomorrow</button>
      </p>
      <Schedules schedule={schedules} day={day} />
=======
      <Schedules movieIds={uniqueMovieIds} schedules={schedules} />
>>>>>>> eebec3ea9c413a59ae8c558c2876624ae85f6763
    </BaseLayout>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
const getStaticProps = async () => {
<<<<<<< HEAD
  const movies = await getMovies();
  const schedules = await getSchedules();
  return {
    props: {
      movies,
      schedules,
=======
  const imaginaryDate = dayjs('2021-10-23').format('YYYY-MM-DD');
  // const today = dayjs().format('YYYY-MM-DD');
  const schedules = await getSchedulesBetweenDates(
    imaginaryDate,
    imaginaryDate
  );

  const movieIds = schedules.map((schedule) => schedule.movie.id);
  const uniqueMovieIds = [...new Set(movieIds)];
  return {
    props: {
      schedules,
      uniqueMovieIds,
>>>>>>> eebec3ea9c413a59ae8c558c2876624ae85f6763
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60,
  };
};

export { getStaticProps };
export default Home;
