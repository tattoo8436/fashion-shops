import React, { } from 'react';

import Helmet from '../components/Helmet';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Error = (): JSX.Element => {

  return (
    <div className="container">
      <div className="main">
        <Helmet title='Không tìm thấy'>
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
        </Helmet>
      </div>
    </div>
  )
}

export default Error