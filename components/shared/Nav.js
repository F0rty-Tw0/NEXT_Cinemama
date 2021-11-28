import Link from 'next/link';
const Nav = ({ className }) => {
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
          <Link href={`/contact`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
