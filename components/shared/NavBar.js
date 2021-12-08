import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import AuthenticationModal from 'features/authentication/AuthenticationModal';
import deAuthenticateUser from 'features/authentication/deAuthenticateUser';
import reAuthenticateUser from 'features/authentication/reAuthenticateUser';
import getAuthenticatedUser from 'features/authentication/getAuthenticatedUser';

const NavBar = ({ className }) => {
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

  return (
    <Nav className={`${className}`}>
      <Nav.Item>
        <Link passHref href={`/`}>
          <a className='nav-link'>Home</a>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link passHref href={`/about`}>
          <a className='nav-link'>About</a>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link passHref href={`/contact`}>
          <a className='nav-link'>Contacts</a>
        </Link>
      </Nav.Item>
      {user?.role === 'ROLE_ADMIN' && (
        <Nav.Item>
          <Link passHref href={`/admin`}>
            <a className='nav-link'>Admin panel</a>
          </Link>
        </Nav.Item>
      )}
      {email ? (
        <div className='ms-auto inherit'>
          <Nav.Item className='d-inline'>
            <Link passHref href={`/user`}>
              <a className='nav-link'>{email}</a>
            </Link>
          </Nav.Item>

          <Nav.Item className='d-inline'>
            <Nav.Link onClick={logout}>logout</Nav.Link>
          </Nav.Item>
        </div>
      ) : (
        <Nav.Item className='ms-auto'>
          <Nav.Link onClick={toggleAuthenticationModal}>login</Nav.Link>
        </Nav.Item>
      )}
      {isOpen && (
        <AuthenticationModal
          closeModal={toggleAuthenticationModal}
        ></AuthenticationModal>
      )}
    </Nav>
  );
};

export default NavBar;