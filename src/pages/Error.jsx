import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from '../components/Helmet';
import { Button, Result, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

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
        <div className="main">
          <Helmet title='Không tìm thấy'>
            <Skeleton
              active
              loading={loading}
            >
              <div className="not-found">
                <Result
                  status='404'
                  title='404'
                  subTitle='Trang không tồn tại'
                  extra={
                    <Link to='/'>
                      <Button
                        type='primary'
                      >Về trang chủ</Button>
                    </Link>
                  }
                ></Result>
              </div>
            </Skeleton>
          </Helmet>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home