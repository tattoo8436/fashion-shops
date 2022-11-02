import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from '../components/Helmet';
import notFound from '../assets/fake-data/not-found'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Helmet title='Không tìm thấy'>
            <div className="not-found">
              <img src={notFound.image} alt="" />
            </div>
          </Helmet>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home