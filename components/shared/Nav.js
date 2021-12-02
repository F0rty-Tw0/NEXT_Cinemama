import Link from 'next/link';
import { useState, useEffect } from 'react';
import AuthenticationModal from 'features/authentication/AuthenticationModal';
import unAuthorizeUser from 'features/authentication/unAuthorizeUser';
import getAuthenticatedUserEmail from 'features/authentication/getAuthenticatedUserEmail';

const Nav = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    (() => {
      console.log(email);
      if (!email) {
        setEmail(getAuthenticatedUserEmail());
      }
    })();
  });

  const toggleAuthenticationModal = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    unAuthorizeUser();
    setEmail('');
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
          <Link href={`/contact`}>contact</Link>
        </li>
        {email && <p>{email}</p>}
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
