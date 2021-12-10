import NavBar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';

const cinemas = [
  'Arne Jacobsens Allé 12',
  'Gammel Jernbanevej 31',
  'Christiansmindevej 17',
];
const Header = ({ className }) => {
  return (
    <header className={className}>
      <NavBar>
        <Container className='logo'>
          <div className='logo'>
            <Image
              className='logo__image'
              src='/favicon.ico'
              width='48'
              height='48'
              alt='Cinemama logo'
            />
            <h1 className='logo__name d-inline'>Cinemama</h1>
            <NavDropdown
              id='nav-dropdown-dark-example'
              title='Gammel Konge Vej 99'
              className='header__dropdown'
              menuVariant='dark'
            >
              {cinemas.map((cinema, index) => (
                <NavDropdown.Item key={index}>{cinema}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </div>
          <Container>
            <Image
              className='some__logo'
              src='/fb.png'
              width='45'
              height='45'
              alt='Facebook Logo'
            />
            <Image
              className='some__logo'
              src='/ins.png'
              width='48'
              height='48'
              alt='Instagram Logo'
            />
            <Image
              className='some__logo'
              src='/yt.png'
              width='48'
              height='48'
              alt='Youtube Logo'
            />
            <Image
              className='some__logo'
              src='/tw.png'
              width='48'
              height='48'
              alt='Twitter Logo'
            />
          </Container>
          <NavBar.Text className='w-25 fw-bold contact__text'>
            <p>📞 Contact us</p>
            <p>+45 20503320</p>
          </NavBar.Text>
        </Container>
      </NavBar>
    </header>
  );
};
export default Header;
