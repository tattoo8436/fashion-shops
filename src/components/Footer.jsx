import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const footerAboutLink = [
  {
    display: 'Giới thiệu',
    path: '/about'
  },
  {
    display: 'Liên hệ',
    path: '/about'
  },
  {
    display: 'Tuyển dụng',
    path: '/about'
  },
  {
    display: 'Tin tức',
    path: '/about'
  },
  {
    display: 'Hệ thống cửa hàng',
    path: '/about'
  }
]

const footerCustomerLink = [
  {
    display: 'Chính sách đổi trả',
    path: '/about'
  },
  {
    display: 'Chính sách hoàn tiền',
    path: '/about'
  },
  {
    display: 'Chính sách bảo hành',
    path: '/about'
  }
]

const Footer = () => {
  return (
    <div className='footer'>
      <Row>
        <Col xs={24} xl={8} >
          <div>
            <div className="footer__title">
              Tổng đài hỗ trợ
            </div>

            <div className="footer__content">
              <p>Liên hệ đặt hàng <strong>0123456789</strong></p>
            </div>
          </div>
        </Col>

        <Col xs={24} xl={8}>
          <div>
            <div className="footer__title">
              Về Yolo
            </div>

            <div className="footer__content">
              {footerAboutLink.map((item, index) => (
                <Link key={index} to={item.path}>
                  <p>{item.display}</p>
                </Link>
              ))}
            </div>
          </div>
        </Col>

        <Col xs={24} xl={8}>
          <div>
            <div className="footer__title">
              Chăm sóc khách hàng
            </div>

            <div className="footer__content">
              {footerCustomerLink.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer