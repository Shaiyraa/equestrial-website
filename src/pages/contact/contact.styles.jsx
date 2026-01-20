import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorVariables } from "../../color-variables";

export const SubTitle = styled.h3`
  font-size: 1.8em;
  font-weight: 400;
  margin: 0 0 80px 0;
  padding: 0;
`;
export const ItemContainer = styled.div`
  margin: 45px 0;
`;
export const Item = styled.p`
  display: inline-block;
  font-size: 1em;
  margin: 0;
  padding: 0;
  font-weight: 300;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 2.8em;
  margin-right: 25px;
`;

export const MailIcon = styled(FontAwesomeIcon)`
  font-size: 2.8em;
  margin-right: 25px;
  color: ${colorVariables.accentColor};
`;

export const IconLink = styled.a`
  text-decoration: none;
  color: ${colorVariables.accentColor};

  &:hover {
    color: ${colorVariables.primaryColor};
  }
`;
