import React, { useEffect, useState } from 'react';

import Helmet from '../components/Helmet';
import { Link } from 'react-router-dom';
import { Button, Result, Skeleton } from 'antd';

const Cart = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  return (
    <div className="container">
      <Helmet title='Kết quả'>
        <Skeleton
          active
          loading={loading}
        >
          <div className="result">
            <Result
              status='success'
              title='Đặt hàng thành công'
              subTitle='Đơn hàng của bạn đã được ghi lại'
              extra={[
                <Link to='/catalog' key='catalog'>
                  <Button type='primary'>
                    Tiếp tục mua hàng
                  </Button>
                </Link>
              ]}
            ></Result>
          </div>
        </Skeleton>
      </Helmet>
    </div>
  )
}

export default Cart