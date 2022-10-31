import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';

import Header from '../components/Header';
import Footer from '../components/Footer';
import productData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
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
        <div className="main">
          <Helmet title='Giỏ hàng'>
            <div className="cart">
              <div className="cart__list">
                {
                  cartProducts.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))
                }
              </div>

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
                  <Button size='block' animate={true}>Đặt hàng</Button>
                  <Link to='/catalog'>
                    <Button size='block' animate={true}>Tiếp tục mua hàng</Button>
                  </Link>
                </div>
              </div>

            </div>
          </Helmet>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart