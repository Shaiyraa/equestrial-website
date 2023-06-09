import React, { useState } from 'react';
import { Logo, Navbar, Flex, Icon, Nav, NavLink } from './header.styles';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../../assets/images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar>
      <Flex className="wrapper">
        <Flex>
          <img
            src={LogoImg}
            style={{ padding: '10px' }}
            alt="equestrial logo"
            height="100px"
          />
          <Logo>Equestrial</Logo>
        </Flex>

        {menuOpen ? (
          <Icon icon={faTimes} onClick={toggleMenuOpen} />
        ) : (
          <Icon icon={faBars} onClick={toggleMenuOpen} />
        )}
        <Nav open={menuOpen}>
          <NavLink to="/" onClick={toggleMenuOpen}>
            about
          </NavLink>
          <NavLink to="/development" onClick={toggleMenuOpen}>
            development
          </NavLink>
          <NavLink to="/jobs" onClick={toggleMenuOpen}>
            jobs
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenuOpen}>
            contact
          </NavLink>
        </Nav>
      </Flex>
    </Navbar>
  );
};

export default Header;
