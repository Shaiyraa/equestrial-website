import React from 'react';
import Hero from '../../components/hero/hero.component';
import Gallery from '../../components/gallery/gallery.component';
import Content from '../../components/content/content.component';
import PatreonBanner from '../../components/patreon-banner/patreon-banner.component';
import { Text, Image } from './about.styles';
import SkillTreePic from '../../assets/images/skilltree.png';

const About = () => (
  <div>
    <Hero title="About the project" />
    <Content>
      <Text>Real-life genetics based, horse breeding simulation browser game with elements of slavic mythology. Discover magical forests and mountains to collect materials for making elixirs following the recipes you found tracking water nymphs.</Text>
      <Text>Follow the skills tree as you train your future champions and choose career path for them. Dressage? Eventing? Maybe barrel racing? The choice is yours. Combine genetics of horses with various breeds to produce unique foals, present your animals at shows and watch them compete head to head with other horses bred by players from all around the Equestrial island.</Text>
      <Image src={SkillTreePic} alt="Horse's skill tree" />
      <Text>Learn basics of equine color genetics, while playing a game! The horses in Equestrial inherit the genes from their parents, just like in real life. You can experiment with countless factors to create unique genetic combinations expressed as unique and rare horse colors. The first breed introduced to the game is a Friesian Horse, that's known for being intelligent, gentle, and of course, black coat. Those, who already know some stuff about genetics may realize, that friesians can be also chestnut or flaxen, but those simply are not being registered in friesian studbook. More on that and other related topics you can read on our Patreon!</Text>
      <Gallery />
    </Content>
    <PatreonBanner />
  </div>
);

export default About;