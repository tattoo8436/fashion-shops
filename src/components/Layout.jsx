import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Error from '../pages/Error';

import { ConfigProvider } from 'antd';
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.variable.min.css';

const Layout = () => {
  ConfigProvider.config({ theme: { primaryColor: '#992fe2' } });

  return (
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:slug' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default Layout