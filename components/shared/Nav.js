import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthenticationModal from 'features/authentication/AuthenticationModal';
import deAuthenticateUser from 'features/authentication/deAuthenticateUser';
import reAuthenticateUser from 'features/authentication/reAuthenticateUser';
import getAuthenticatedUser from 'features/authentication/getAuthenticatedUser';

const Nav = ({ className }) => {
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
    <nav className={className}>
      This is Nav
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/about`}>About</Link>
        </li>
        <li>
          <Link href={`/contact`}>Contacts</Link>
        </li>
        {user?.role === 'ROLE_ADMIN' && (
          <li>
            <Link href={`/admin`}>Admin panel</Link>
          </li>
        )}
        {email && <Link href={`/user`}>{email}</Link>}
      </ul>
      {email ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={toggleAuthenticationModal}>login</button>
      )}
      {isOpen && (
        <AuthenticationModal
          closeModal={toggleAuthenticationModal}
        ></AuthenticationModal>
      )}
    </nav>
  );
};

export default Nav;
