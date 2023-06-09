import React from 'react';
import Hero from '../../components/hero/hero.component';
import Content from '../../components/content/content.component';
import {
  SubTitle,
  ItemContainer,
  Item,
  MailIcon,
  Icon,
  IconLink,
} from './contact.styles';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faDiscord,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <div>
    <Hero title="Contact us" />
    <Content>
      <div style={{ textAlign: 'center' }}>
        <SubTitle>
          Want to share an opinion or have a mindblowing idea? Feel free to
          contact us in any case!
        </SubTitle>
        <ItemContainer>
          <IconLink
            href="https://www.facebook.com/equestrialthegame"
            target="_blank"
          >
            <Icon icon={faFacebookSquare} />
          </IconLink>
          <Item>Equestrial The Game</Item>
        </ItemContainer>
        <ItemContainer>
          <IconLink
            href="https://www.instagram.com/equestrialthegame/"
            target="_blank"
          >
            <Icon icon={faInstagramSquare} />
          </IconLink>
          <Item>@equestrialthegame</Item>
        </ItemContainer>
        <ItemContainer>
          <IconLink href="https://twitter.com/EquestrialGame" target="_blank">
            <Icon icon={faTwitterSquare} />
          </IconLink>
          <Item>@EquestrialGame</Item>
        </ItemContainer>
        <ItemContainer>
          <IconLink href="https://discord.com/invite/7zU678s" target="_blank">
            <Icon icon={faDiscord} />
          </IconLink>
          <Item>discord.gg/7zU678s</Item>
        </ItemContainer>
        <ItemContainer>
          <MailIcon icon={faEnvelope} />
          <Item>teamequestrial@gmail.com</Item>
        </ItemContainer>
      </div>
    </Content>
  </div>
);

export default Contact;
