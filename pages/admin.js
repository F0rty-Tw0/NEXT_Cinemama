import withAuth from 'components/hoc/withAuth';
import BaseLayout from 'layouts/BaseLayout';
const Admin = () => {
  return (
    <BaseLayout
      title={'Cinemama: Admin Panel'}
      description='The best place to watch movies'
      className='base-layout__movie'
    >
      <h1>This is admin panel</h1>
    </BaseLayout>
  );
};

export default withAuth(Admin)('ROLE_ADMIN');
