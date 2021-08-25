import React from 'react';
import { Container, Flex, Icon, IconLink, IconsContainer } from './footer.styles';
import Logo from '../../assets/images/logo.png';
import { faFacebookSquare, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <Container>
    <Flex className="wrapper">
      <img src={Logo} alt="equestrial logo" height="140px" />

      <IconsContainer>
        <IconLink href='#'><Icon icon={faFacebookSquare} /></IconLink>
        <IconLink href='#'><Icon icon={faDiscord} /></IconLink>
      </IconsContainer>

      <div style={{ textAlign: 'right', margin: 'auto 0', fontSize: '1.3em', letterSpacing: '1px' }}>&copy; Equestrial 2021</div>
    </Flex>
  </Container>
);

export default Footer