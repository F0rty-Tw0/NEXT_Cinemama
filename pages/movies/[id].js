import { useRouter } from 'next/router';
import BaseLayout from '@/components/layouts/BaseLayout';

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <BaseLayout
      title={`Best description of movie ${id}`}
      description='The best place to watch movies'
      className='base-layout__movie'
    >
      <h1>Movie {id}</h1>
    </BaseLayout>
  );
};
export default Movie;
