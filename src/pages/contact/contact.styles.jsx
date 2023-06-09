import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  font-size: 1.2em;
  margin: 0;
  padding: 0;

  /* center horizontally */
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 3.2em;
  margin-right: 25px;
`;

export const MailIcon = styled(FontAwesomeIcon)`
  font-size: 3.2em;
  margin-right: 25px;
  color: #ee8b3b;
`;

export const IconLink = styled.a`
  text-decoration: none;
  color: #ee8b3b;

  &:hover {
    color: #fcf2e2;
  }
`;
