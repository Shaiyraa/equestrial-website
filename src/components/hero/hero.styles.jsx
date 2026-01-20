import styled from "styled-components";
import HeroImgSmall from "../../assets/images/hero-small.png";
import HeroImgMedium from "../../assets/images/hero-medium.png";
import HeroImgLarge from "../../assets/images/hero.png";
import { colorVariables } from "../../color-variables";

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  background-color: #1a1b1c;
  background: url(${HeroImgSmall}) center no-repeat;

  @media (min-width: 768px) {
    background: url(${HeroImgMedium}) center no-repeat;
    height: 500px;
  }

  @media (min-width: 1280px) {
    background: url(${HeroImgLarge}) center no-repeat;
    height: 500px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  bottom: 25px;
  margin: 0;
  padding: 0;
  color: ${colorVariables.textColor};
  text-shadow: 1px 1px 15px #000;
  font-size: 2.1em;
  font-weight: 700;
  letter-spacing: 1px;
  left: 30px;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }

  @media (min-width: 1280px) {
    font-size: 3.6em;
    left: auto;
    bottom: 45px;
  }
`;
