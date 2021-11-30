import Link from 'next/link';
import { useState } from 'react';
import Authentication from '@/components/modals/Authentication';

const Nav = ({ className, email }) => {
  const [isAuthenticationOpen, setIsAuthenticationOpen] = useState(false);

  const toggleAuthentication = () => {
    setIsAuthenticationOpen(!isAuthenticationOpen);
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
        <p>{email}</p>
      </ul>
      <button onClick={toggleAuthentication}>login</button>
      {isAuthenticationOpen && (
        <Authentication closeModal={toggleAuthentication}></Authentication>
      )}
    </nav>
  );
};

export default Nav;
