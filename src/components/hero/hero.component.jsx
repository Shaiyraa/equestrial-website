import React from 'react';
import { ImgWrapper, Title } from './hero.styles';

const Hero = ({ title }) => (
  <ImgWrapper>
    <div className="wrapper">
      <Title>{title}</Title>
    </div>
  </ImgWrapper>
);

export default Hero;