import React from 'react';
import { Container } from './content.styles';

const Content = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Content;