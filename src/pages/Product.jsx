import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import productData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import ProductView from '../components/ProductView';

const Product = props => {
  const param = useParams();
  const product = productData.getProductBySlug(param.slug);
  
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Helmet title={product.title}>
            <ProductView product={product} />
          </Helmet>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product