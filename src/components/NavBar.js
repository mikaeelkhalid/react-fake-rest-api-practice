import { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const myStyle = {
    color: 'inherit',
    textDecoration: 'inherit',
    display: 'block',
    padding: '0.5rem 31rem',
    paddingRight: '0',
    paddingLeft: '0',
  };
  return (
    <>
      <Container>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>
            React Assignment
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className='mr-2' />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink style={myStyle} to='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={myStyle} to='/airlines'>
                  Airlines
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={myStyle} to='/passengers'>
                  Passengers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={myStyle} to='/settings'>
                  Settings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={myStyle} to='/logout'>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default withRouter(NavBar);
