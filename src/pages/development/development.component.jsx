import React from 'react';
import Hero from '../../components/hero/hero.component';
import Content from '../../components/content/content.component';
import {
  SubTitle,
  Stage,
  Text,
  Point,
  Dot,
  PointText,
} from './development.styles';

const Development = () => (
  <div>
    <Hero title="Development" />
    <Content>
      <SubTitle>
        Current development stage is<Stage>pre-alpha</Stage>
      </SubTitle>
      <Text>
        Game is currently taking its first steps towards being a working system.
      </Text>
      <Text>
        The core of the game is mostly finished. Some of the more minor
        mechanics are already implemented, written as a standalone algorithms or
        on paper, as future ideas and reference.
      </Text>
      <Text>
        The most challenging aspect the game so far code-wise is horse genetics,
        as this topic is vast and complicated enough in real life, so
        translating it into code is like an actual dare from nature itself. You
        can check out the progress of our genetics algorithm on the{' '}
        <a
          href="https://genetics.playequestrial.pl"
          target="_blank"
          rel="noreferrer"
        >
          demo website
        </a>
        .
      </Text>
      <SubTitle>Next stages:</SubTitle>

      <Point>
        <Dot></Dot> alpha
      </Point>
      <PointText>
        Game core will be fully playable, but the features are not all there
        yet.
      </PointText>
      <Point>
        <Dot></Dot> beta
      </Point>
      <PointText>
        That's where things get interesting for people who are waiting for the
        game. Yes! Time for beta testing! We will catch all the bugs slowly, so
        it's actually fun to play Equestrial.
      </PointText>
      <Point>
        <Dot></Dot> live
      </Point>
      <PointText>The game will be fully playable and open to public.</PointText>
    </Content>
  </div>
);

export default Development;
