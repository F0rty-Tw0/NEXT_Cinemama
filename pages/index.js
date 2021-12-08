import dayjs from 'dayjs';
import wrapper from 'redux/store';
import BaseLayout from 'layouts/BaseLayout';
import Schedules from 'components/schedules/Schedules';
import SchedulePicker from 'components/schedules/SchedulePicker';
import { getSchedulesBetweenDates } from 'endpoints/schedules';
import { setError, setSchedules } from 'redux/actions';
const Home = () => {
  return (
    <BaseLayout
      title='Welcome to the Cinemama Theaters'
      description='The best place to watch movies'
      className='base-layout__main'
    >
      <SchedulePicker />
      <Schedules />
    </BaseLayout>
  );
};

const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const today = dayjs().format('YYYY-MM-DD');
  const dayAfterTomorrow = dayjs().add(2, 'day').format('YYYY-MM-DD');
  try {
    const schedules = await getSchedulesBetweenDates(today, dayAfterTomorrow);
    if (schedules.length > 0) {
      store.dispatch(setSchedules(schedules));
    }
  } catch (err) {
    store.dispatch(setError(err.message));
  }
});

export { getStaticProps };
export default Home;
