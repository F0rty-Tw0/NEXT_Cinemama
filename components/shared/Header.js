import NavBar from 'react-bootstrap/NavBar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Image from 'next/Image';
const cinemas = [
  'Arne Jacobsens Allé 12',
  'Gammel Jernbanevej 31',
  'Christiansmindevej 17',
];
const Header = ({ className }) => {
  return (
    <header className={className}>
      <NavBar>
        <Container>
          <div className='logo'>
            <Image
              className='logo__image'
              src='/favicon.ico'
              width='50'
              height='50'
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
          <Container>facebook, instagram, youtube, linkedin, logos</Container>
          <NavBar.Text>
            <p>For reservations or inquiries</p>
            <p>+4520503320</p>
          </NavBar.Text>
        </Container>
      </NavBar>
    </header>
  );
};
export default Header;
