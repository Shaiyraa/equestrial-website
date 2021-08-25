import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  background-color: #ff4c29;
  padding: 20px 0;
`;

export const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const IconsContainer = styled.div`
  margin: auto 0;
  text-align: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 4em;
  margin: 13px;
`
export const IconLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #334756;
  }
`;