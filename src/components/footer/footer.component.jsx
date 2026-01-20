import React from "react";
import {
  Container,
  Flex,
  Icon,
  IconLink,
  IconsContainer,
  Copyright,
} from "./footer.styles";
import Logo from "../../assets/images/logo.png";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <Container>
    <Flex className="wrapper">
      <img src={Logo} alt="equestrial logo" height="80px" />

      <IconsContainer>
        <IconLink
          href="https://www.facebook.com/equestrialthegame"
          target="_blank"
        >
          <Icon icon={faFacebookSquare} />
        </IconLink>
        <IconLink
          href="https://www.instagram.com/equestrialthegame/"
          target="_blank"
        >
          <Icon icon={faInstagramSquare} />
        </IconLink>
        <IconLink href="https://twitter.com/EquestrialGame" target="_blank">
          <Icon icon={faTwitterSquare} />
        </IconLink>
        <IconLink href="https://discord.com/invite/7zU678s" target="_blank">
          <Icon icon={faDiscord} />
        </IconLink>
      </IconsContainer>

      <Copyright>&copy; Equestrial 2026</Copyright>
    </Flex>
  </Container>
);

export default Footer;
