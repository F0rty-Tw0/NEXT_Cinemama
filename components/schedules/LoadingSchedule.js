import BaseLayout from 'layouts/BaseLayout';

const LoadingSchedule = () => {
  return (
    <BaseLayout
      title='Loading Schedule'
      description='Loading Schedule'
      className='base-layout__loading-schedule'
    >
      <div className='content--center mt-5'>LOADING MOVIE</div>
    </BaseLayout>
  );
};

export default LoadingSchedule;
