import WithAuth from 'components/hoc/withAuth';
import BaseLayout from 'layouts/BaseLayout';
const Admin = () => {
  return (
    <WithAuth role={'ROLE_ADMIN'}>
      <BaseLayout
        title={'Cinemama: Admin Panel'}
        description='The best place to watch movies'
        className='base-layout__admin'
      >
        <h1>This is admin panel</h1>
      </BaseLayout>
    </WithAuth>
  );
};

export default Admin;
