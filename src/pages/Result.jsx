import React, { useEffect, useState } from 'react';

import Helmet from '../components/Helmet';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

const Cart = () => {

  return (
    <div className="container">
      <Helmet title='Kết quả'>
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
      </Helmet>
    </div>
  )
}

export default Cart