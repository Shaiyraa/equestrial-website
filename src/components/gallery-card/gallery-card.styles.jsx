import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ small }) => small ? '230px' : '340px'};
  margin: 3px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

export const TitleContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: ${({ small }) => small ? '60px' : '75px'};
  text-align: right;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  text-shadow: 1px 1px 4px #000;
  margin: 0 25px 0 0;
  padding: 0;

  /* center horizontally */
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;