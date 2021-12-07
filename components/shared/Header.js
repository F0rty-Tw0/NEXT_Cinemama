import Nav from 'react-bootstrap/Nav';
const Header = ({ className }) => {
  return (
    <header className={className}>
      <Nav
        activeKey='/home'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href='/home'>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='disabled' disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};
export default Header;
