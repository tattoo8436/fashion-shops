import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import productData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import ProductView from '../components/ProductView';
import { Breadcrumb, Skeleton } from 'antd';

const Product = props => {
  const param = useParams();
  const product = productData.getProductBySlug(param.slug);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <div className="header__route">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/'>Trang chủ</Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <Link to='/catalog'>Sản phẩm</Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <Link>{product.slug} </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Helmet title={product.title}>
          <Skeleton
            active
            loading={loading}
          >
            <ProductView product={product} />
          </Skeleton>
        </Helmet>
      </div>
      <Footer />
    </>
  )
}

export default Product