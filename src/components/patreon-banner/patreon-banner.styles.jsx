import styled from 'styled-components';
import PatreonImg from '../../assets/images/patreon-banner.png';

export const Container = styled.div`
  background-image: url(${PatreonImg});
  background-size: cover;
  background-position: center;
  height: 500px;

  @media (min-width: 768px) {
    height: 700px;
  }
  @media (min-width: 1280px) {
    height: 900px;
  }
`;
export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px;
  text-align: center;

  /* center horizontally */
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const Title = styled.h1`
  font-weight: 900;
  letter-spacing: 1px;
  margin: 0 0 30px 0;
`;
