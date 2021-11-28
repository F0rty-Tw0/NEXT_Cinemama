import BaseLayout from 'components/layouts/BaseLayout';
import Movies from '@/components/movies/AllMovies';
const Home = () => {
  return (
    <BaseLayout
      title='Welcome to the Cinemama Theaters'
      description='The best place to watch movies'
      className='base-layout__main'
    >
      <Movies></Movies>
    </BaseLayout>
  );
};
export default Home;
