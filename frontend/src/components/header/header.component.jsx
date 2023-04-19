import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Suitcase Livin'</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'><i className='fas fa-shopping-cart'></i>CART</Nav.Link>
              <Nav.Link href='/login'><i className='fas fa-user'></i>SIGN IN</Nav.Link>
              {/* <NavDropdown title='MORE' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/about'>
                  About the Brand
                </NavDropdown.Item>
                <NavDropdown.Item href='/founder'>Founder</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
