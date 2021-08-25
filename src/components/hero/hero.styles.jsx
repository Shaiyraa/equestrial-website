import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position:relative;
  width: 100%;
  height: 890px;
  background: url(${(props) => props.pic}) center no-repeat;
`;

export const Title = styled.h1`
  position:absolute;
  bottom: 45px;
  margin: 0;
  padding: 0;
  font-size: 3.6em;
  font-weight: 700;
  letter-spacing: 1px;
`;
