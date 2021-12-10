import { useSelector } from 'react-redux';
import BaseLayout from 'layouts/BaseLayout';

const User = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <BaseLayout
      title='Cinemama: User Panel'
      description='User Panel'
      className='base-layout__user'
    >
      <div className='content--center mt-5'>
        <h1>This will be a beautiful user page:</h1>
        <h2>for the user under email: {user?.email}</h2>
      </div>
    </BaseLayout>
  );
};

export default User;
