import { useSelector } from 'react-redux';
import BaseLayout from 'layouts/BaseLayout';
const User = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <BaseLayout
      title={'Cinemama: Admin Panel'}
      description='The best place to watch movies'
      className='base-layout__admin'
    >
      <h1>This is user page</h1>
    </BaseLayout>
  );
};

export default User;
