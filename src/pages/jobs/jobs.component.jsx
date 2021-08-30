import React from 'react';
import Hero from '../../components/hero/hero.component';
import Content from '../../components/content/content.component';
import { Text } from './jobs.styles';

const Jobs = () => (
  <div>
    <Hero title="Jobs" />
    <Content>
      <Text>We're not looking to hire anyone now, but feel free to contact us if you want to be notified, if in the future we want to expand our team.</Text>
      <Text>jobs@equestrial.com</Text>
    </Content>
  </div>
);

export default Jobs;