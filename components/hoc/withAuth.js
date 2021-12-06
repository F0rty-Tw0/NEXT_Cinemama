// HOC/withAuth.jsx
import Redirect from 'utils/redirect';
import { useGetLoggedUser } from 'endpoints/users';

const withAuth = (Component) => (role) => {
  return () => {
    const { data: user, loading: loadingUser } = useGetLoggedUser();

    //If the user is loading we show this <p> content
    if (loadingUser) {
      return <p>Loading...</p>;
    }
    if (role && user.role.name !== role) {
      return <Redirect ssr to='/' />;
    } else {
      return <Component />;
    }
  };
};
export default withAuth;
