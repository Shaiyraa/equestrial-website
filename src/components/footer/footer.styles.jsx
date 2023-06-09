import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  background-color: #bf3336;
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
  font-size: 4em;
  margin: 13px;
`;
export const IconLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #1e2b3e;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin: auto 0;
  font-size: 1.3em;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    text-align: right;
  }
`;
