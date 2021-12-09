import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import AuthenticationModal from 'features/authentication/AuthenticationModal';
import deAuthenticateUser from 'features/authentication/deAuthenticateUser';
import reAuthenticateUser from 'features/authentication/reAuthenticateUser';
import getAuthenticatedUser from 'features/authentication/getAuthenticatedUser';

const NavBar = ({ className }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const email = user?.email;
  useEffect(() => {
    const loggedUser = getAuthenticatedUser();
    if (loggedUser) {
      dispatch(reAuthenticateUser(loggedUser));
    }
  }, [dispatch]);

  const toggleAuthenticationModal = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    dispatch(deAuthenticateUser());
  };

  const getActiveLink = (path) => {
    return router.pathname == path ? 'active' : '';
  };
  return (
    <nav className={`${className}`}>
      <Nav>
        <Nav.Item>
          <Link passHref href={`/`}>
            <Nav.Link className={getActiveLink('/')}>Home</Nav.Link>
          </Link>
        </Nav.Item>

        {user?.role === 'ROLE_ADMIN' && (
          <Nav.Item>
            <Link passHref href={`/admin`}>
              <Nav.Link className={getActiveLink('/admin')}>
                Admin Panel
              </Nav.Link>
            </Link>
          </Nav.Item>
        )}
        {email ? (
          <div className='ms-auto inherit'>
            <Nav.Item className='d-inline'>
              <Link passHref href={`/user`}>
                <Nav.Link className={getActiveLink('/user')}>{email}</Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item className='d-inline'>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav.Item>
          </div>
        ) : (
          <Nav.Item className='ms-auto'>
            <Nav.Link onClick={toggleAuthenticationModal}>Login</Nav.Link>
          </Nav.Item>
        )}

        <AuthenticationModal
          isOpen={isOpen}
          handleClose={toggleAuthenticationModal}
        ></AuthenticationModal>
      </Nav>
    </nav>
  );
};

export default NavBar;
