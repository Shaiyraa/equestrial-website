import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorVariables } from "../../color-variables";

export const Container = styled.div`
  background-color: ${colorVariables.tonedAccentColor};
  padding: 40px 0;
`;

export const Flex = styled.div`
  text-align: center;
  margin: 0 30px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1280px) {
    margin: auto;
  }
`;

export const IconsContainer = styled.div`
  margin: 35px 0;

  @media (min-width: 768px) {
    margin: auto 0;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 3em;
  margin: 13px;
`;

export const IconLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${colorVariables.secondaryColor};
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin: auto 0;
  font-size: 0.9em;
  font-weight: 300;

  @media (min-width: 768px) {
    text-align: right;
  }
`;
