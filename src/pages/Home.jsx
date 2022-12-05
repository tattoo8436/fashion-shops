import React, { } from 'react';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import heroSliderData from '../assets/fake-data/hero-slider';

const Home = () => {

  return (
    <div className="container">
      <Helmet title='Trang chủ'>
        <HeroSlider
          data={heroSliderData}
          control={true}
        ></HeroSlider>
      </Helmet>
    </div>
  )
}

export default Home