import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';

import Header from '../components/Header';
import Footer from '../components/Footer';
import productData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { Breadcrumb, Button, Col, Row } from 'antd';

const Cart = () => {
  const cartItems = useSelector((state) => {
    console.log(state.cartItems);
    return state.cartItems.value
  });
  console.log(productData.getCartItemsInfo(cartItems));
  const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems));
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalProduct(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
    setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) *
      Number(item.price)), 0));
  }, [cartItems])

  return (
    <>
      <Header />
      <div className="container">
        <Helmet title='Giỏ hàng'>
          <div className="cart">
            <div className="cart__header">
              <div className="cart__header__route">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link to='/'>Trang chủ</Link>
                  </Breadcrumb.Item>

                  <Breadcrumb.Item>
                    <Link>Giỏ hàng</Link>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>

            <Row>
              <Col span={14}>
                <div className="cart__list">
                  {
                    cartProducts.map((item, index) => (
                      <CartItem key={index} item={item} />
                    ))
                  }
                </div>
              </Col>

              <Col span={10}>
                <div className="cart__info">
                  <div className="cart__info__txt">
                    <p>Bạn đang có <strong>{totalProduct}</strong> sản phẩm trong giỏ hàng</p>

                    <div className="cart__info__txt__price">
                      <span>Tổng tiền: </span>
                      <NumericFormat value={totalPrice} displayType={'text'}
                        thousandSeparator={true}></NumericFormat>đ
                    </div>
                  </div>

                  <div className="cart__info__btn">
                    <Button type='primary' >Đặt hàng</Button>
                    <Button>
                      <Link to='/catalog'>Tiếp tục mua hàng</Link>
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>

          </div>
        </Helmet>
      </div>
      <Footer />
    </>
  )
}

export default Cart