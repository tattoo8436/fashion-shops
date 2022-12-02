import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import heroSliderData from '../assets/fake-data/hero-slider';
import { Skeleton } from 'antd';


const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])


  return (
    <>
      <Header />
      <div className="container">
        <Helmet title='Trang chủ'>
          <Skeleton 
          loading={loading}
          active
          >
            <HeroSlider
              data={heroSliderData}
              control={true}
            ></HeroSlider>
          </Skeleton>
        </Helmet>
      </div>
      <Footer />
    </>
  )
}

export default Home