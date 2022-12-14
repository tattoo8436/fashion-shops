import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';

import productData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { Breadcrumb, Button, Col, List, Row } from 'antd';
import { clearCart } from '../redux/shopping-cart/cartItemSlide';

import VirtualList from 'rc-virtual-list';

const Cart = (): JSX.Element => {
  const cartItems = useSelector((state: any) => {
    console.log(state.cartItems);
    return state.cartItems.value
  });
  console.log(productData.getCartItemsInfo(cartItems));
  const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems));
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [canOrder, setCanOrder] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setCanOrder(totalProduct > 0 ? true : false);
  }, [totalProduct])


  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalProduct(cartItems.reduce((total: any, item: any) => total + Number(item.quantity), 0));
    setTotalPrice(cartItems.reduce((total: any, item: any) => total + (Number(item.quantity) *
      Number(item.price)), 0));
  }, [cartItems])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onOrder = () => {
    dispatch(clearCart());
    navigate('/result');
  }

  return (
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
                  <Link to='/cart'>Giỏ hàng</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <Row>
            <Col span={12}>
              <div className="cart__list">
                <List>
                  <VirtualList
                    data={cartProducts}
                    height={400}
                    itemHeight={100}
                    itemKey='cartProducts'
                  >
                    {(item) => (
                      <List.Item key={item.slug}>
                        <CartItem item={item}></CartItem>
                      </List.Item>
                    )}
                  </VirtualList>
                </List>
              </div>
            </Col>

            <Col span={10} offset={2}>
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
                  <Button type='primary'
                    onClick={onOrder}
                    disabled={!canOrder}
                  >
                    Đặt hàng
                  </Button>

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
  )
}

export default Cart