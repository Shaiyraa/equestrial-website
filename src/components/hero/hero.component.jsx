import React from 'react';
import { ImgWrapper, Title } from './hero.styles';
import HeroPic from '../../assets/images/hero.jpg';

const Hero = ({ title }) => (
  <ImgWrapper pic={HeroPic}>
    <div className="wrapper">
      <Title>{title}</Title>
    </div>
  </ImgWrapper>
);

export default Hero;