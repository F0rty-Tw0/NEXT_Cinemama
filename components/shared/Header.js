import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

const Header = ({ className }) => {

  return (
    <header className={className}>
      <Nav
        fill
        variant="tabs"
        // activeKey='/'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Link href="/">
          <Image src="https://i.imgur.com/w6ftcfo.jpeg" rounded />
        </Nav.Link>
        <Nav.Item>
          <Dropdown className="header__dropdown">
            <Dropdown.Toggle className="header__dropdown__toggle" id="dropdown-header">
              Click to change Cinemama
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Arne Jacobsens Allé 12, 2300 København
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Gammel Jernbanevej 31, 2500 København
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Christiansmindevej 17, 4300 Holbæk
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
        <Nav.Item className="header__nav__item">
          <h5>Current Cinemama is</h5>
          <strong>Amagerbrogade 32</strong>
          <p>2300 København S</p>
        </Nav.Item>
        <Nav.Item className="header__nav__item">
          <h5>For reservations or inquiries</h5>
          <h5>please contact</h5>
          <strong>+4520503320</strong>
        </Nav.Item>
      </Nav>
    </header>
  );
};
export default Header;
