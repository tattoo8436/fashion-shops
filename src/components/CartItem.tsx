import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

import { updateItem, removeItem } from '../redux/shopping-cart/cartItemSlide';
import { Col, Image, Row } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

const CartItem = (props: any) => {
    const dispatch = useDispatch();
    const [item, setItem] = useState(props.item);
    const [quantity, setQuantity] = useState(props.item.quantity);

    useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.quantity);
    }, [props.item])

    const updateQuantity = (opt: any) => {
        if (opt === '+') {
            dispatch(updateItem({ ...item, quantity: quantity + 1 }));
        }
        if (opt === '-') {
            dispatch(updateItem({ ...item, quantity: quantity === 1 ? 1 : quantity - 1 }));
        }
    }

    const removeCartItem = () => {
        dispatch(removeItem(item));
    }

    return (
        <div className='cart__item'>
            <Row>
                <Col span={6}>
                    <div className="cart__item__image">
                        <Image src={item.product.image01} alt="" />
                    </div>
                </Col>

                <Col span={14} offset={2}>
                    <div className="cart__item__info">
                        <div className="cart__item__info__name">
                            <Link to={`/catalog/${item.slug}`}>
                                {`${item.product.title}`}
                            </Link>
                            <div className="cart__item__info__name__detail">
                                <div>Màu sắc - {item.color} </div>
                                <div>Kích cỡ - {item.size} </div>
                            </div>
                        </div>

                        <div className="cart__item__info__price">
                            <NumericFormat value={item.product.price} displayType={'text'}
                                thousandSeparator={true}></NumericFormat>đ
                        </div>

                        <div className="cart__item__info__quantity">
                            <div className="product__info__item__quantity">
                                <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('-')}>
                                    <MinusOutlined />
                                </div>

                                <div className="product__info__item__quantity__input">
                                    {item.quantity}
                                </div>

                                <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('+')}>
                                    <PlusOutlined />
                                </div>
                            </div>
                        </div>

                        <div className="cart__item__info__del">
                            <DeleteOutlined onClick={() => removeCartItem()} />
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem