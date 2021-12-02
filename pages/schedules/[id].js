import BaseLayout from 'layouts/BaseLayout';

const Schedule = ({ schedule }) => {
  return (
    <BaseLayout
      title={
        schedule
          ? `Best description of movie ${schedule.id}`
          : 'Cinemama: Loading movie...'
      }
      description='The best place to watch movies'
      className='base-layout__movie'
    ></BaseLayout>
  );
};

export default Schedule;
