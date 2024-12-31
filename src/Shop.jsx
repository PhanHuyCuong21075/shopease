import React from 'react';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import Contact from './components/contact/contact';
import NewArrivals from './components/Sections/NewArrivals';
import Category from './components/Sections/Categories/Category';
import content from './data/content.json';

const Shop = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      {/* <Contact /> */}
      <NewArrivals />
      <Category
        title={content?.categories[0]?.title}
        data={content?.categories[0]?.data}
      />
    </>
  );
};

export default Shop;
