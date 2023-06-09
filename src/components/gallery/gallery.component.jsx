import React from 'react';
import GalleryCard from '../../components/gallery-card/gallery-card.component';
import { FeaturedContainer, SecondaryContainer } from './gallery.styles';

import BreedingImg from '../../assets/images/breeding.png';
import CompeteImg from '../../assets/images/compete.png';
import DiscoverImg from '../../assets/images/discover.png';
import CareImg from '../../assets/images/care.png';
import ProfessionImg from '../../assets/images/profession.png';

const Gallery = () => (
  <div>
    <FeaturedContainer>
      <GalleryCard title="breed unique foals" image={BreedingImg} />
      <GalleryCard title="compete with other players" image={CompeteImg} />
    </FeaturedContainer>
    <SecondaryContainer>
      <GalleryCard
        title="discover the mysterious lore"
        image={DiscoverImg}
        small
      />
      <GalleryCard title="take care of your horses" image={CareImg} small />
      <GalleryCard title="choose your profession" image={ProfessionImg} small />
    </SecondaryContainer>
  </div>
);

export default Gallery;
