import React from 'react';
import Hero from '../../components/hero/hero.component';
import Content from '../../components/content/content.component';
import { SubTitle, ItemContainer, Item, Icon } from './contact.styles';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <div>
    <Hero title="Contact us" />
    <Content>
      <div style={{ textAlign: 'center' }}>
        <SubTitle>Want to share an opinion or have a mindblowing idea? Feel free to contact us in any matter!</SubTitle>
        <ItemContainer><Icon icon={faEnvelope} /><Item>contact@equestrial.pl</Item></ItemContainer>
        <ItemContainer><Icon icon={faFacebookSquare} /><Item>Equestrial The Game</Item></ItemContainer>
        <ItemContainer><Icon icon={faDiscord} /><Item>discord.gg/7zU678s</Item></ItemContainer>
      </div>
    </Content>
  </div>
);

export default Contact;