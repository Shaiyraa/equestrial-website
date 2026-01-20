import React from "react";
import Hero from "../../components/hero/hero.component";
import Gallery from "../../components/gallery/gallery.component";
import Content from "../../components/content/content.component";
import { Text, TrainingImage } from "./about.styles";
import CoatShowcase from "../../assets/images/showcase.gif";
import TrainingShowcase from "../../assets/images/training.png";

const About = () => (
  <div>
    <Hero title="About the project" />
    <Content>
      <Text>
        A browser game about horses. Breed them, compete and join a club to
        progress with friends! Discover magical forests and mountains to collect
        materials for making elixirs following the recipes you found tracking
        water nymphs.
      </Text>
      <Gallery />
      <Text>
        Learn basics of equine color genetics, while playing! The horses in
        Equestrial inherit the genes from their parents, just like in real life.
        You can experiment with countless factors to create unique genetic
        combinations expressed as unique and rare horse colors. You can test our
        genetics algorithm in{" "}
        <a
          href="https://genetics.playequestrial.pl"
          target="_blank"
          rel="noreferrer"
        >
          our demo app
        </a>
        . The first breed introduced to the game is gonna be the Friesian Horse,
        known for being intelligent, gentle, and of course, being black from
        head to toes. Those, who already know some stuff about genetics may
        realize, that friesians can be also chestnut or flaxen, but those simply
        are not being registered in friesian studbook. More on that and other
        related topics you can read on our Socials!
      </Text>
      <div style={{ textAlign: "center" }}>
        <img
          style={{ display: "inline-block" }}
          src={CoatShowcase}
          alt="Showcase of horse coat colors"
        />
      </div>
      <Text>
        Follow the skills tree as you train your future champions and choose
        career path for them. Dressage? Eventing? Maybe barrel racing? The
        choice is yours. Combine genetics of horses with various breeds to
        produce unique foals, present your animals at shows and watch them
        compete head to head with other horses bred by players from all around
        the Equestrial island.
      </Text>
      <div style={{ textAlign: "center" }}>
        <TrainingImage
          src={TrainingShowcase}
          alt="Showcase of horse training methods"
        />
      </div>
    </Content>
  </div>
);

export default About;
