import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import AppRoutes from '../routes/AppRoutes';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {

  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#992fe2',
            colorLink: '#992fe2',
          },
        }}
      >
        <Header />
        <AppRoutes />
        <Footer />
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default Layout