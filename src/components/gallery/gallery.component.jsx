import React from 'react';
import GalleryCard from '../../components/gallery-card/gallery-card.component';
import { FeaturedContainer, SecondaryContainer } from './gallery.styles';

import BreedingImg from '../../assets/images/breeding.jpg';
import CompeteImg from '../../assets/images/compete.jpg';
import DiscoverImg from '../../assets/images/discover.jpg';
import CareImg from '../../assets/images/care.jpg';
import ProfessionImg from '../../assets/images/profession.jpg';


const Gallery = () => (
  <div>
    <FeaturedContainer>
      <GalleryCard title="breed unique foals" image={BreedingImg} />
      <GalleryCard title="compete with other players" image={CompeteImg} />
    </FeaturedContainer>
    <SecondaryContainer>
      <GalleryCard title="discover the mysterious lore" image={DiscoverImg} small />
      <GalleryCard title="take care of your horses" image={CareImg} small />
      <GalleryCard title="choose your profession" image={ProfessionImg} small />
    </SecondaryContainer>
  </div>
);

export default Gallery;