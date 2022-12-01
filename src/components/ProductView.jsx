import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { addItem } from '../redux/shopping-cart/cartItemSlide';
import { Button, Col, Collapse, Image, notification, Row } from 'antd';

const ProductView = props => {
    const product = props.product;
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity === 1 ? 1 : quantity - 1);
        }
    }

    const check = () => {
        if (color === undefined) {
            notifyError('Vui lòng chọn màu sắc');
            return false;
        }
        if (size === undefined) {
            notifyError('Vui lòng chọn kích cỡ');
            return false;
        }
        return true;
    }

    const [apiNotify, contexHolder] = notification.useNotification();

    const notifyAddToCart = () => {
        apiNotify.success({
            message: 'Thành công',
            description: 'Thêm vào giỏ hàng thành công'
        })
    }

    const notifyError = (e) => {
        apiNotify.error({
            message: 'Lỗi',
            description: e
        })
    }

    const addToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }));
            notifyAddToCart();
        }
    }

    let navigate = useNavigate();

    const goToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }))
            navigate('/cart');
        }
    }

    const dispatch = useDispatch();

    return (
        <div className='product'>
            {contexHolder}
            <Row>
                <Col span={14}>
                    <div className="product__image">
                        <Row>
                            <Col span={18}>
                                <div className="product__image__main">
                                    <Image src={product.image01} alt="" />
                                </div>
                            </Col>

                            <Col span={6}>
                                <div className="product__image__sub">
                                    <div>
                                        <Image src={product.image01} alt="" />
                                    </div>
                                    <div>
                                        <Image src={product.image02} alt="" />
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col span={10}>
                    <div className="product__info">
                        <h2 className="product__info__title">{product.title}</h2>
                        <div className="product__info__item">
                            <div className="product__info__item__price">
                                <NumericFormat value={product.price} displayType={'text'}
                                    thousandSeparator={true}></NumericFormat>đ
                            </div>
                        </div>

                        <div className="product__info__item">
                            <div className="product__info__item__title">
                                Màu sắc
                            </div>

                            <div className="product__info__item__list">
                                {
                                    product.colors.map((item, index) => (
                                        <div key={index} className={`product__info__item__list__item 
                                ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                            <div className={`circle bg-${item}`}></div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="product__info__item">
                            <div className="product__info__item__title">
                                Kích cỡ
                            </div>

                            <div className="product__info__item__list">
                                {
                                    product.size.map((item, index) => (
                                        <div key={index} className={`product__info__item__list__item 
                                ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                            <div className="product__info__item__list__item__size">
                                                {item}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="product__info__item">
                            <div className="product__info__item__title">
                                Số lượng
                            </div>

                            <div className="product__info__item__quantity">
                                <div className="product__info__item__quantity__btn"
                                    onClick={() => updateQuantity('minus')}>
                                    <i className="bx bx-minus"></i>
                                </div>

                                <div className="product__info__item__quantity__input">
                                    {quantity}
                                </div>

                                <div className="product__info__item__quantity__btn"
                                    onClick={() => updateQuantity('plus')}>
                                    <i className="bx bx-plus"></i>
                                </div>
                            </div>
                        </div>

                        <div className="product__info__item">
                            <div className="product__info__item__btn">
                                <Button onClick={() => addToCart()}>Thêm vào giỏ hàng</Button>
                                <Button type='primary' onClick={() => goToCart()}>Mua ngay</Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <div className="product__description">
                        <Collapse>
                            <Collapse.Panel header='Thông tin sản phẩm'>
                                <div className="product-description"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                ></div>
                            </Collapse.Panel>
                        </Collapse>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductView