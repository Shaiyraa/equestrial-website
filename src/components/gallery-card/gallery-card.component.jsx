import React from 'react';
import { Container, TitleContainer, Title } from './gallery-card.styles';

const GalleryCard = ({ title, image, small }) => (
  <Container image={image} small={small}>
    <TitleContainer small={small}>
      <Title>{title}</Title>
    </TitleContainer>
  </Container>
);

export default GalleryCard;