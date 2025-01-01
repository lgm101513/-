import React from 'react';
import Hero from '../components/Hero';
import Attractions from '../components/Attractions';
import Food from '../components/Food';
import Hotels from '../components/Hotels';
import Transportation from '../components/Transportation';
import Shopping from '../components/Shopping';
import Entertainment from '../components/Entertainment';
import Clothing from '../components/Clothing';

const Home = () => {
  return (
    <>
      <Hero />
      <Attractions />
      <Food />
      <Hotels />
      <Transportation />
      <Shopping />
      <Entertainment />
      <Clothing />
    </>
  );
};

export default Home;