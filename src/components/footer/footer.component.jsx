import React from 'react';
import { Container, Flex, Icon, IconLink, IconsContainer, Copyright } from './footer.styles';
import Logo from '../../assets/images/logo.png';
import { faFacebookSquare, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <Container>
    <Flex className="wrapper">
      <img src={Logo} alt="equestrial logo" height="120px" />

      <IconsContainer>
        <IconLink href='#'><Icon icon={faFacebookSquare} /></IconLink>
        <IconLink href='#'><Icon icon={faDiscord} /></IconLink>
      </IconsContainer>

      <Copyright>&copy; Equestrial 2021</Copyright>
    </Flex>
  </Container>
);

export default Footer