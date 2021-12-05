import { useSelector } from 'react-redux';
import BaseLayout from 'layouts/BaseLayout';
import Redirect from 'utils/redirect';
const Admin = () => {
  const { user } = useSelector((state) => state.user);

  return user?.role === 'ROLE_ADMIN' ? (
    <BaseLayout
      title={'Cinemama: Admin Panel'}
      description='The best place to watch movies'
      className='base-layout__movie'
    >
      <h1>This is admin panel</h1>
    </BaseLayout>
  ) : (
    <Redirect ssr to='/' />
  );
};
export default Admin;
