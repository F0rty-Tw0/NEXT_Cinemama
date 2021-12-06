import BaseLayout from 'layouts/BaseLayout';
import Redirect from 'utils/redirect';
import { useGetLoggedUser } from 'endpoints/users';

const WithAuth = ({ children, role }) => {
  const { data: user, loading: loadingUser } = useGetLoggedUser();

  if (loadingUser)
    return (
      <BaseLayout>
        <div>Loading...</div>
      </BaseLayout>
    );

  if (!user) return <Redirect to='/' />;
  if (role && user.role.name !== role) return <Redirect to='/' />;
  return { ...children };
};
export default WithAuth;
