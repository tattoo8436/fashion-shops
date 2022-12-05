import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import productData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import ProductView from '../components/ProductView';
import { Breadcrumb } from 'antd';

const Product = props => {
  const param = useParams();
  const product = productData.getProductBySlug(param.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
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
        <ProductView product={product} />
      </Helmet>
    </div>
  )
}

export default Product