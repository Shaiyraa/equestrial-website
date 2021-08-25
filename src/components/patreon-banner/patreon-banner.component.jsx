import React from 'react';
import { Container, Content, Title } from './patreon-banner.styles';

const PatreonBanner = () => (
  <Container>
    <Content>
      <Title>please, consider supporting us</Title>
      <a href="https://www.patreon.com/bePatron?u=60463355" data-patreon-widget-type="become-patron-button">Become a Patron!</a>
    </Content>
  </Container>
);

export default PatreonBanner;