import React, { useState } from 'react';
import { Logo, Navbar, Flex, Icon, Nav, NavLink, PatreonLink } from './header.styles';
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
          <NavLink to='/' onClick={toggleMenuOpen}>about</NavLink>
          <NavLink to='/development' onClick={toggleMenuOpen}>development</NavLink>
          <NavLink to='/jobs' onClick={toggleMenuOpen}>jobs</NavLink>
          <PatreonLink href='https://www.patreon.com/bePatron?u=60463355' target="_blank" onClick={toggleMenuOpen}>patreon</PatreonLink>
          <NavLink to='/contact' onClick={toggleMenuOpen}>contact</NavLink>
        </Nav>
      </Flex>
    </Navbar>
  )
};

export default Header;