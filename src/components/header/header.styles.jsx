import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  z-index: 99999;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 3.2em;
  font-weight: 300;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

export const Nav = styled.div`
   display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: auto;

`;

export const NavLink = styled(Link)`
  font-size: 1.5em;
  font-weight: 300;
  margin: 0 25px;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #ff4c29;
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

export const PatreonLink = styled.a`
  font-size: 1.5em;
  font-weight: 300;
  margin: 0 25px;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #ff4c29;
  }
`;