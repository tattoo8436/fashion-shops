import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import heroSliderData from '../assets/fake-data/hero-slider';


const Home = () => {


  return (
    <>
      <Header />
      <div className="container">
          <Helmet title='Trang chủ'>
            <HeroSlider
              data={heroSliderData}
              control={true}
            ></HeroSlider>
          </Helmet>
      </div>
      <Footer />
    </>
  )
}

export default Home