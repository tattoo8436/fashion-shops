import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { set, remove } from '../redux/product-modal/productModalSlice';
import { useNavigate } from 'react-router';

import Button from './Button';
import productData from '../assets/fake-data/products';
import { addItem } from '../redux/shopping-cart/cartItemSlide';

const ProductView = props => {
    const product = props.product;
    const [descriptionExpand, setDescriptionExpand] = useState(false);
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);
    const updateQuantity = (type) => {
        if(type === 'plus'){
            setQuantity(quantity + 1);
        } else{
            setQuantity(quantity === 1 ? 1 : quantity - 1);
        }
    }

    const check = () => {
        if(color === undefined){
            alert('Vui lòng chọn màu sắc');
            return false;
        }
        if(size === undefined){
            alert('Vui lòng chọn kích cỡ');
            return false
        }
        return true;
    }

    const addToCart = () => {
        if(check()){
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }));
            alert('Thêm vào giỏ hàng thành công');
        }
    }

    let navigate = useNavigate();

    const goToCart = () => {
        if(check()){
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

    // const dispatch = useDispatch();
    // const productSlug = useSelector((state) => state.productModal.value);
    // const [pd, setPd] = useState(undefined);
    // useEffect(() => {
    //   setPd(productData.getProductBySlug(productSlug));
    // }, [productSlug]);
    const dispatch = useDispatch();

    return (
        <div className='product'>
            <div className="product__image">
                <img src={product.image01} alt="" />
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>

                    <div className="product-description__content"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    >
                    </div>

                    <div className="product-description__toggle">
                        <Button size='sm' animate={true}
                            onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
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
                    <Button size='sm' animate={true} onClick={() => addToCart()}>Thêm vào giỏ hàng</Button>
                    <Button size='sm' animate={true} onClick={() => goToCart()}>Mua ngay</Button>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductView