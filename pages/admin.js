import WithAuth from 'components/hoc/withAuth';
import BaseLayout from 'layouts/BaseLayout';

const Admin = () => {
  return (
    <WithAuth role={'ROLE_ADMIN'}>
      <BaseLayout
        title='Cinemama: Admin Panel'
        description='Admin Panel'
        className='base-layout__admin'
      >
        <div className='content--center mt-5'>
          <h1>This Will be a beautiful admin panel</h1>
        </div>
      </BaseLayout>
    </WithAuth>
  );
};

export default Admin;
