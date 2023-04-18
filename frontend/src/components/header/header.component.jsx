import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Suitcase Livin'</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>HOME</Nav.Link>
              <Nav.Link href='#link'>SHOP</Nav.Link>
              <NavDropdown title='MORE' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>About the Brand</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Founder
                </NavDropdown.Item>
                {/* <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
