import { useSelector } from 'react-redux';
import { useGetLoggedUser } from 'endpoints/users';
import BaseLayout from 'layouts/BaseLayout';
import Redirect from 'utils/redirect';

const WithAuth = ({ children, role }) => {
  const { user } = useSelector((state) => state.user);
  const { data: loggedUser, loading: loadingUser } = useGetLoggedUser();
  if (user) {
    if (loadingUser)
      return (
        <BaseLayout>
          <div>Loading...</div>
        </BaseLayout>
      );

    if (!loggedUser) return <Redirect to='/' />;
    if (role && loggedUser.role.name !== role) return <Redirect to='/' />;
    return { ...children };
  }
  return <Redirect to='/' />;
};
export default WithAuth;
