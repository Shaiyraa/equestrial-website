import React from 'react';
import { Logo, Navbar, Flex, Nav, NavLink, PatreonLink } from './header.styles';

const Header = () => (
  <Navbar>
    <Flex className="wrapper">
      <Logo>Equestrial</Logo>
      <Nav>
        <NavLink to='/'>about</NavLink>
        <NavLink to='/development'>development</NavLink>
        <NavLink to='/jobs'>jobs</NavLink>
        <PatreonLink href='#'>patreon</PatreonLink>
        <NavLink to='/contact'>contact</NavLink>
      </Nav>
    </Flex>
  </Navbar>
);

export default Header;