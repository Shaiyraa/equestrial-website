import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  z-index: 99999;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 19px;
  right: 20px;
  font-size: 2.1em;
  margin: 13px;

  @media (min-width: 768px) {
    top: 23px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 1.9em;
  font-weight: 300;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin: 33px 0 0 18px;
  padding: 0;

  @media (min-width: 768px) {
    margin: 25px 0 0 18px;
    font-size: 2.6em;
  }

  @media (min-width: 1280px) {
    margin: 18px 0 0 18px;
    font-size: 3.2em;
  }
`;

export const Nav = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};

  position: absolute;
  top: 100px;
  width: 100%;

  @media (min-width: 1280px) {
    width: auto;
    position: static;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.5em;
  font-weight: 300;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #bf3336;
  }

  // small device
  display: block;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0.7);

  @media (min-width: 1280px) {
    width: auto;
    padding: 0;
    border: none;
    margin: 0 25px;
    background-color: transparent;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const PatreonLink = styled.a`
  font-size: 1.5em;
  font-weight: 300;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #ff4c29;
  }

  // small device
  display: block;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0.7);

  @media (min-width: 1280px) {
    width: auto;
    padding: 0;
    border: none;
    margin: 0 25px;
    background-color: transparent;
  }
`;
