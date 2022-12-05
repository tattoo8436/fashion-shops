import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.variable.min.css';

import AppRoutes from '../routes/AppRoutes';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  ConfigProvider.config({ theme: { primaryColor: '#992fe2' } });

  return (
    <BrowserRouter>
      <ConfigProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default Layout