import dayjs from 'dayjs';
import BaseLayout from 'layouts/BaseLayout';
import Schedules from 'components/schedules/Schedules';
import { getSchedulesBetweenDates } from 'endpoints/schedules';

const Home = ({ schedules, uniqueMovieIds }) => {
  return (
    <BaseLayout
      title='Welcome to the Cinemama Theaters'
      description='The best place to watch movies'
      className='base-layout__main'
    >
      <Schedules movieIds={uniqueMovieIds} schedules={schedules} />
    </BaseLayout>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
const getStaticProps = async () => {
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
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60,
  };
};

export { getStaticProps };
export default Home;
