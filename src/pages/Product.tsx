import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import productData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import ProductView from '../components/ProductView';
import { Breadcrumb } from 'antd';

const Product = (props: any): JSX.Element => {
  const param = useParams();
  const product: any = productData.getProductBySlug(param.slug);

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
            <span>{product.slug} </span>
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