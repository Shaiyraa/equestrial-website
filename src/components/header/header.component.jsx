import React, { useState } from 'react';
import { Logo, Navbar, Flex, Icon, Nav, NavLink, PatreonLink } from './header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  console.log(menuOpen)

  return (
    <Navbar>
      <Flex className="wrapper">
        <Logo>Equestrial</Logo>
        {menuOpen ? <Icon icon={faTimes} onClick={toggleMenuOpen} /> : <Icon icon={faBars} onClick={toggleMenuOpen} />}
        <Nav open={menuOpen}>
          <NavLink to='/'>about</NavLink>
          <NavLink to='/development'>development</NavLink>
          <NavLink to='/jobs'>jobs</NavLink>
          <PatreonLink href='https://www.patreon.com/bePatron?u=60463355' target="_blank" >patreon</PatreonLink>
          <NavLink to='/contact'>contact</NavLink>
        </Nav>
      </Flex>
    </Navbar>
  )
};

export default Header;